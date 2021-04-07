import { action } from 'typesafe-actions';
import { ActionType, initialAppState, SendStatuses } from './consts';

export function loadStateStarted() {
  return action(ActionType.INIT_STATE, {
    initialAppState
  });
}

export function loadStateSuccess(state) {
  return action(ActionType.LOAD_STATE, {
    state
  });
};

export function loadStateFailure(err) {
  return action(ActionType.LOAD_STATE_FAILURE, {
    err
  });
};

export function importItemsStarted() {
  return action(ActionType.IMPORT_ITEMS_STARTED);
};

export function importItemsSuccess(items) {
  return action(ActionType.IMPORT_ITEMS_SUCCESS, {
    items
  })
};

export function importItemsFailure(err) {
  return action(ActionType.IMPORT_ITEMS_FAILURE, {
    err
  });
};

export function exportItemsSuccess(items) {
  return action(ActionType.EXPORT_ITEMS_SUCCESS, {
    items
  });
};

export function sendItemStarted(item) {
  return action(ActionType.CHANGE_ITEM, {
    item: { ...item, response: "", error: "", sended: SendStatuses.SEND_STARTED }
  });
};

export function sendItemSuccess(item, res) {
  return action(ActionType.CHANGE_ITEM, {
    item: { ...item, response: JSON.stringify(res.data), error: null, sended: SendStatuses.SEND_SUCCESS, }
  });
};

function err2Str(err) {
  // Error 😨
  if (err.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    //console.log(err.response.data);
    //console.log(err.response.status);
    //console.log(err.response.headers);
    return JSON.stringify(err.response.data);
  } else if (err.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    //console.log(err.request);
    return err.request;
  } else {
    // Something happened in setting up the request and triggered an Error
    //console.log('Error', err.message);
    return 'Error:' + err.message;
  }
}

export function sendItemFailure(item, err) {
  return action(ActionType.CHANGE_ITEM, {
    item: { ...item, response: "", error: err2Str(err), sended: SendStatuses.SEND_FAILURE, }
  });
};

export function addItem(item) {
  return action(ActionType.ADD_ITEM, {
    item
  });
}

export function changeItem(item) {
  return action(ActionType.CHANGE_ITEM, {
    item
  });
}

export function changePalette(palette) {
  return action(ActionType.CHANGE_PALETTE, {
    palette
  });
}

export function setVisibilityFilter(visibilityFilter) {
  return action(ActionType.SET_VISIBILITY_FILTER, {
    visibilityFilter
  });
}

export function toggleShowProgressBar() {
  return action(ActionType.TOGGLE_SHOW_PROGRESS_BAR);
}

export function toggleShowDeleted() {
  return action(ActionType.TOGGLE_SHOW_DELETED);
}

export function toggleFilter() {
  return action(ActionType.TOGGLE_FILTER);
}
