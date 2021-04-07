import { ActionType, initialPalette } from '../stores/consts';

export default function paletteReducer(state = initialPalette, action) {
  switch (action.type) {
    case ActionType.CHANGE_PALETTE:
      const {primary, secondary, type} = action.payload.palette;
      return {...state, primary, secondary, type };
    default:
      return state;
  }
}
