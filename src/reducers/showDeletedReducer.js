import { ActionType } from '../stores/consts';

export default function showDeletedReducer(showDeleted = false, action) {
  switch (action.type) {
    case ActionType.TOGGLE_SHOW_DELETED:
      return !showDeleted;
    default:
      return showDeleted;
  }
}
