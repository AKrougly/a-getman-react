import { NUM, MAX_DISPLAY } from '../actions/constants';
import helper from '../model/helper';

function num(state = '', action) {
  let output = state;

  if (action.type === NUM) {
    if (action.data.calculated) {
      output = action.value;
    } else {
      if (state === '0') {
        if (action.value !== '0') {
          output = action.value;
        }
      } else {
        if (state.length < MAX_DISPLAY) {
          output = helper.appendStr(state, action.value);
        }
      }
    }
  }

  return output;
}

export default num;
