import { CLEAR, OPERATOR } from '../actions/constants';
import helper from '../model/helper';
import calcResult from '../reducers/calcResult';

function storedValue(state = '', action) {
  let output = state;

  if (action.type === OPERATOR) {
    const { calculated, lastOperator, displayValue } = action.data;

    if (!calculated &&
        !helper.isEmpty(lastOperator) &&
        !helper.isEmpty(state)) {
      output = calcResult(state, displayValue, lastOperator);
    } else {
      output = displayValue;
    }
  } else if (action.type === CLEAR) {
    output = '';
  }

  return output;
}

export default storedValue;
