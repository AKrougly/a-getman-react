/*
function IsJsonString(jsonData) {
	if (/^[\],:{}\s]*$/
		.test(jsonData
			.replace(/\\["\\/bfnrtu]/g, '@')
				.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
					.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
		//the json is ok
		return true;
	} else {
		//the json is not ok
		return false;
	}
}
*/	
function isEmpty(str) {
	return (!str || 0 === str.trim().length);
}

function isEmptyObj(obj) {
  return Object.keys(obj).length === 0;
}

function findItemByName (items, itemName) {
	const itemByName = items.filter(item => {
		return item.name === itemName.value;
	});

	if (itemByName.length === 0) {
		console.log('Не найден элемент с именем:' + itemName.value);
		throw new Error('Не найден элемент с именем:' + itemName.value);
	}
	if (itemByName.length > 1) {
		console.log('У элементов одинаковое имя:' + itemName.value);
		throw new Error('У элементов одинаковое имя:' + itemName.value);
	}
	return itemByName[0];
}

function scanDelimeter (delim, str, pos = 0) {
	let ind = pos;
	if (str.charAt(ind) === delim) {
		ind++;
	}
	
	return ind;
}

function scanWord (word, str, pos = 0) {
	let ind = pos;
	while (str.charAt(ind).match(/[-a-z_0-9]+/i)) {
		ind++;
	}

	word.value = str.slice(pos, ind);
	
	return ind;
}

function substParam (str, item, items) {
	let prm = "";
	let pos;
	let itemField = {};
	let itemName = {};
	let objField = {};
	let itemByName = {};
	let itemFieldValue = {};

	pos = scanDelimeter('{', str);
	pos = scanWord(itemField, str, pos);

	if (str.charAt(pos) === '[') {
		pos = scanDelimeter('[', str, pos);
		pos = scanWord(itemName, str, pos);
		pos = scanDelimeter(']', str, pos);
	}

	if (str.charAt(pos) === '.') {
		pos = scanDelimeter('.', str, pos);
		pos = scanWord(objField, str, pos);
	}

	pos = scanDelimeter('}', str, pos);

	itemFieldValue[objField.value] = {};

	if ((itemField.value === 'this') && (objField.value === 'name')) {
		itemFieldValue[objField.value] = item.name;
	} else if (((itemField.value === 'req') || (itemField.value === 'resp')) && !isEmptyObj(itemName)) {
		itemByName = findItemByName(items, itemName);
		if (!isEmptyObj(itemByName)) {
			if (itemField.value === 'resp') {
				itemFieldValue = JSON.parse(itemByName.response);
			} else if (itemField.value === 'req') {
				if (itemByName.httpMethod.localeCompare('json', undefined, { sensitivity: 'accent' }) === 0) {
					itemFieldValue = JSON.parse(itemByName.value);
				}
			}
		}
	} else {
		throw new Error("Undefined macro-param:" + str);
	}

	prm = itemFieldValue[objField.value];

	return prm;
}

function substNestedParams (str, item, items, pos = 0) {
	let res = str;
	if (!isEmpty(res) && (pos <= res.length)) {
		let param = '';
		let indCloseBrace = -1;
		let indOpenBrace = res.indexOf('{', pos);
		if (indOpenBrace !== -1) {
			indCloseBrace = res.indexOf('}', indOpenBrace);
			if (indCloseBrace === -1) {
				throw new Error('Missing macro-param\'s closed brace after pos:' + indOpenBrace);
			}

			res = substNestedParams(res, item, items, indOpenBrace + 1);
		}
		if (indOpenBrace !== -1) {
			indCloseBrace = res.indexOf('}', indOpenBrace);
			if (indCloseBrace === -1) {
				throw new Error('Missing macro-param\'s closed brace after pos:' + indOpenBrace);
			}
			param = res.slice(indOpenBrace, indCloseBrace + 1);
			console.log('param:' + param);
			param = substParam (param, item, items)
			res = res.slice(0, indOpenBrace) + (param === 'undefined' ? '' : param) + res.slice(indCloseBrace + 1);
		}
	}

	return res;
}

export default function substParams (item, items, pos = 0) {
	let value = item.value;
	let indOpenBrace = value.indexOf('{', pos);
	while (indOpenBrace !== -1) {
		value = substNestedParams (value, item, items, pos);
		indOpenBrace = value.indexOf('{', pos);
	}

	return value;
}
