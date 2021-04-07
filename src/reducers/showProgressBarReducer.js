import { ActionType } from '../stores/consts';

export default function showProgressBarReducer(showProgressBar = false, action) {
  switch (action.type) {
    case ActionType.TOGGLE_SHOW_PROGRESS_BAR:
      return !showProgressBar;
    default:
      return showProgressBar;
  }
}
