import { DEL } from '../actions/constants';
import helper from '../model/helper';

function del(state = '0', action) {
  let output = state;

  if (action.type === DEL) {
    output = helper.removeLastChar(state);
    if ((output.length === 2) && (output.charAt(0) === '-') && (output.charAt(1) === '0')) {
      output = '0';
    }
    if ((output.length === 1) && (output.charAt(0) === '-')) {
      output = '0';
    }
    if (output.length === 0) {
      output = '0';
    }
  }

  return output;
}

export default del;
