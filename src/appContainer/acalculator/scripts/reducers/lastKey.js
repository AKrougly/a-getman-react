import { NUM, OPERATOR, COMMA, DEL } from '../actions/constants';

function lastKey(state = '', action) {
  let output = state;

  if ((action.type === OPERATOR) ||
      (action.type === NUM) ||
      (action.type === COMMA)) {
    output = action.value;
  } else if (action.type === DEL) {
    const { displayValue } = action.data;
    if (displayValue.length > 1) {
      output = displayValue.charAt(displayValue.length - 2);
    } else {
      output = '';
    }
  }

  return output;
}

export default lastKey;
