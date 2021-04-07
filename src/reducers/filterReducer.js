import { ActionType } from '../stores/consts';

export default function filterReducer(filter = false, action) {
  switch (action.type) {
    case ActionType.TOGGLE_FILTER:
      return !filter;
    default:
      return filter;
  }
}
