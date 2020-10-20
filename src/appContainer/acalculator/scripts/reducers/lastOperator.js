import { NUM, COMMA, OPERATOR, CLEAR, DEL } from '../actions/constants';

function lastOperator(state = '', action) {
  let output = state;

  if ((action.type === NUM) || (action.type === COMMA)) {
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
