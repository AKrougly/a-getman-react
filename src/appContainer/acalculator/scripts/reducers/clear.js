import { CLEAR } from '../actions/constants';

function clear(state = '0', action) {
  let output = state;
  if (action.type === CLEAR) {
    output = '0';
  }
  return output;
}

export default clear;
