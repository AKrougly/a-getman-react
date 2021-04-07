import { COMMA, MAX_DISPLAY } from '../actions/constants';
import helper from '../model/helper';

function comma(state = '', action) {
  let output = state;

  if (action.type === COMMA) {
    if (action.data.calculated) {
      output = '0' + action.value;
    } else if (state.indexOf(',') === -1) {
      if (state.length < MAX_DISPLAY - 1) {
        output = helper.appendStr(state, action.value);
      }
    }
  }
  return output;
}

export default comma;
