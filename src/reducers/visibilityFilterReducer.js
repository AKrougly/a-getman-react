import { ActionType} from '../stores/consts';

export default function visibilityFilterReducer(visibilityFilter = "SHOW_ALL", action) {
  switch (action.type) {
    case ActionType.SET_VISIBILITY_FILTER:
      return action.payload.visibilityFilter;
    default:
      return visibilityFilter;
  }
}
