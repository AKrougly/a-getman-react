import { OPERATOR } from '../actions/constants';
import helper from '../model/helper';
import calcResult from '../reducers/calcResult';

function operator(state = '', action) {
  let output = state;

  if (action.type === OPERATOR) {
    const { calculated, lastOperator, storedValue } = action.data;

    if (!calculated &&
        !helper.isEmpty(lastOperator) &&
        !helper.isEmpty(storedValue)) {
      output = calcResult(storedValue, state, lastOperator);
    }
  }
  return output;
}

export default operator;
