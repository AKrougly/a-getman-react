import { NUM,  COMMA, OPERATOR, CLEAR, DEL } from '../actions/constants';
import helper from '../model/helper';

function displayHistory(state = '', action) {
  let output = state;

  if ((action.type === NUM) || (action.type === COMMA)) {
    if (action.data.lastKey === '=') {
      output = '';
    }
  } else if (action.type === OPERATOR) {

    const { calculated, lastOperator, displayValue } = action.data;

    if (!calculated) {
      if (helper.isEmpty(state)) {
        output = displayValue + ' ' + action.value;
      } else {
        //console.log(`1 lastOperator:${lastOperator} state:${state} action.value:${action.value}`);
        if (/^.*[+-]+.*$/.test(lastOperator) && /^.*[+-]+.*$/.test(state) && /^[/*]+$/.test(action.value)) {
          output = '(' + state + ' ' + displayValue + ') ' + action.value;
        } else {
          output = state + ' ' + displayValue + ' ' + action.value;
        }
      }
    } else if (!helper.isEmpty(state)) {
      //console.log(`2 lastOperator:${lastOperator} state:${state} action.value:${action.value}`);
      if (/^.*[=+-]+.*$/.test(lastOperator) && /^.*[+-]+.*$/.test(state) && /^[/*]+$/.test(action.value)) {
        output = '(' + state.substring(0, state.length - 2) + ') ' + action.value;
      } else {
        output = state.substring(0, state.length - 1) + action.value;
      }
    }
  } else if ((action.type === CLEAR) || (action.type === DEL)) {
    output = '';
  }

  return output;
}

export default displayHistory;
