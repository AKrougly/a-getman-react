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
		return {};
	}
	if (itemByName.length > 1) {
		console.log('У элементов одинаковое имя:' + itemName.value);
		return {};
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
	while (str.charAt(ind).match(/[-a-z_]/i)) {
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

	if (!isEmptyObj(itemName) && ((itemField.value === 'req') || (itemField.value === 'resp'))) {
		itemByName = findItemByName(items, itemName);
		if (!isEmptyObj(itemByName)) {
			if (itemField.value === 'resp') {
				itemFieldValue = JSON.parse(itemByName.response);
			}
			if (itemField.value === 'req') {
				if (itemByName.httpMethod.localeCompare('json', undefined, { sensitivity: 'accent' }) === 0) {
					itemFieldValue = JSON.parse(itemByName.value);
				} else {
					itemFieldValue = JSON.parse('{}');
				}
			}
		}
	}

	if (itemField.value === 'this') {
		if (objField.value === 'name') {
			itemFieldValue[objField.value] = item.name;
		}
		else {
			itemFieldValue[objField.value] = {};
		}
	}

	prm = itemFieldValue[objField.value];

	return prm;
}

function substNestedParams (str, item, items, pos = 0) {
	let res = str;
	if (!isEmpty(res)) {
		let param = '';
		let indCloseBrace = -1;
		let indOpenBrace = res.indexOf('{', pos);
		indCloseBrace = res.indexOf('}', pos);
		if ((indOpenBrace !== -1) && (indCloseBrace !== -1) && (indOpenBrace < indCloseBrace)) {
			res = substNestedParams(res, item, items, indOpenBrace + 1);
		} else {
			if (pos > 0) {
				if (indCloseBrace !== -1) {
					param = res.slice(pos - 1, indCloseBrace + 1);
					param = substParam (param, item, items)
					res = res.slice(0, pos - 1) + (param === 'undefined' ? '' : param )+ res.slice(indCloseBrace + 1);
				}
			}
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
