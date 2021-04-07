import {
	importItemsStarted,
	importItemsSuccess,
	importItemsFailure,
	//
	exportItemsSuccess,
} from '../actions';

export function importItems(file) {
	return dispatch => {
		dispatch(importItemsStarted());
	
		var reader = new FileReader();
		reader.onload = function(event) {
			try {
				const jsonContent = JSON.parse(event.target.result);
				dispatch(importItemsSuccess(jsonContent) || []);
			} catch(e) {
				alert(e);
				//console.error('Error JSONParse', e.message);
			}
		};
		reader.onerror = function(event) {
			dispatch(importItemsFailure(event.type));
		};
	
		reader.readAsText(file);
	};
}

export function exportItems(items) {
	return dispatch => {
		dispatch(exportItemsSuccess(items));
	};
}
