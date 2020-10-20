import * as constants from '../actions/constants';
import num from '../reducers/num';
import comma from '../reducers/comma';
import calc from '../reducers/calc';
import switchOperator from '../reducers/switchOperator';
import percent from '../reducers/percent';
import clear from '../reducers/clear';
import del from '../reducers/del';

function displayValue(state = '', action) {
  let output = state;

  switch (action.type) {
    case constants.NUM:
      output = num(state, action); break;
    case constants.COMMA:
      output = comma(state, action); break;
    case constants.CALC:
      output = calc(state, action); break;
    case constants.SWITCH_OPERATOR:
      output = switchOperator(state, action); break;
    case constants.PERCENT:
      output = percent(state, action); break;
    case constants.CLEAR:
      output = clear(state, action); break;
    case constants.DEL:
      output = del(state, action); break;
    default: output = state;
  }

  return output;
}

export default displayValue;
