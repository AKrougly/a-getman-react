import { v1 as uuid } from 'uuid';
import { ActionType, } from '../stores/consts';

const itemAction = (item, action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return {
        uid: uuid(),
        name: action.payload.item.name,
        url: action.payload.item.url,
        httpMethod: action.payload.item.httpMethod,
        time: Date(),
        response: "",
        error:  "",
        sended: null,
        completed: false,
        deleted: false,
      };
    case ActionType.CHANGE_ITEM:
      if (item.uid !== action.payload.item.uid) {
        return item;
      }
      return {
        ...item,
        name: action.payload.item.name,
        url: action.payload.item.url,
        httpMethod: action.payload.item.httpMethod,
        time: Date(),
        response: action.payload.item.response,
        error:  action.payload.item.error,
        sended: action.payload.item.sended,
        completed: action.payload.item.completed,
        deleted: action.payload.item.deleted,
      };
    default:
      return item;
  }
};

export default function itemsReducer(state = [], action) {
  switch (action.type) {
    case ActionType.INIT_STATE:
      return action.payload.initialAppState.items;
    case ActionType.LOAD_STATE:
      return action.payload.state.items;
    case ActionType.ADD_ITEM:
      return [...state, itemAction(undefined, action)];
    case ActionType.CHANGE_ITEM:
      return state.map(t =>
        itemAction(t, action)
      );
    case ActionType.IMPORT_ITEMS_SUCCESS:
      //return action.items;
      return action.payload.items.map((item, idx) => {
        return { ...item, uid: uuid(), time: Date()};
      });
    case ActionType.EXPORT_ITEMS_SUCCESS:
      var text = JSON.stringify(state, null, '  ')/*.replace(/\\/g, '')*/;
      navigator.clipboard.writeText(text);
      return state;
    default:
      return state;
  }
}
