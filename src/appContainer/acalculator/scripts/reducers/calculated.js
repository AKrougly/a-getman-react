import { CALCULATED } from '../actions/constants';

function calculated(state = false, action) {
  let output = state;

  if (action.type === CALCULATED) {
    output = action.value;
  }

  return output;
}

export default calculated;
