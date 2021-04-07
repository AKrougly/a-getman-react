import { CALC } from '../actions/constants';
import helper from '../model/helper';
import calcResult from '../reducers/calcResult';

function calc(state = '', action) {
  let output = state;

  if (action.type === CALC) {
    const { calculated, lastOperator, storedValue } = action.data;

    if (!calculated &&
        !helper.isEmpty(lastOperator) &&
        !helper.isEmpty(storedValue)) {
      output = calcResult(storedValue, state, lastOperator);
    }
  }

  return output;
}

export default calc;
