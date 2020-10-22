import { SWITCH_OPERATOR } from '../actions/constants';

function switchOperator(state = '', action) {
  let output = state;
  if (action.type === SWITCH_OPERATOR) {
    if (output.charAt(0) === '-') {
      output = output.substring(1);
    } else {
      if ((output.charAt(0) !== '0') || (output.length > 1)) {
        output = '-' + output;
      }
    }
  }

  return output;
}

export default switchOperator;
