import { NUM, COMMA, OPERATOR, CLEAR, DEL, SWITCH_OPERATOR } from '../actions/constants';

function lastOperator(state = '', action) {
  let output = state;

  if ((action.type === NUM) || (action.type === COMMA) || (action.type === SWITCH_OPERATOR)) {
    const { lastKey } = action.data;
    if (lastKey === '=') {
      output = '';
    }
  } else if (action.type === OPERATOR) {
    if (action.value !== '=') {
      output = action.value;
    }
  } else if ((action.type === CLEAR) || (action.type === DEL)) {
    output = '';
  }

  return output;
}

export default lastOperator;
