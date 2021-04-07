import { NUM } from '../actions/constants';
import helper from '../model/helper';

const maxDisplay = 15;

function numKey(state = '', action) {
  let output = state;

  const { lastKey, displayHistory, calculated } = action.data;

  if (action.type === NUM) {
    if (lastKey === '=') {
      output = action.value;
    } else if (!(helper.isEmpty(displayHistory)) &&
        (!helper.isDigit(displayHistory.charAt(displayHistory.length - 1))) &&
        calculated
      ) {
      output = action.value;
    } else {
      if (state === '0') {
        if (action.value !== '0') {
          output = action.value;
        }
      } else {
        if (state.length < maxDisplay) {
          output = helper.appendStr(state, action.value);
        }
      }
    }
  }

  return output;
}

export default numKey;
