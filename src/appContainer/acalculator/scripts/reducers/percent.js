import { PERCENT } from '../actions/constants';
import Big from "big.js";

function percent(state = '0', action) {
  let output = state;

  if (action.type === PERCENT) {
    if (action.data.lastOperator === "+") {
      output = Big(action.data.storedValue).times(Big(state)).div(Big('100')).toString();
    } else if (action.data.lastOperator === "*") {
      output = Big(state).div(Big('100')).toString();
    }
  }

  return output;
}

export default percent;
