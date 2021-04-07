import axios from 'axios';

import {
	sendItemStarted,
	sendItemSuccess,
	sendItemFailure,
} from "../actions";
import substParams from './apiUtils';

export function sendItem(item, items) {
	return dispatch => {
		try {
			dispatch(sendItemStarted(item));

			const req = substParams(item, items);
			axios
			.get(req)
			.then(res => {
				dispatch(sendItemSuccess(item, res));
			})
			.catch(err => {
				dispatch(sendItemFailure(item, err));
			});
		} catch (err) {
			dispatch(sendItemFailure(item, err));
		}
	};
}

