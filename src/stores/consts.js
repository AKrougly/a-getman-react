export const initialPalette = {
  primary: "teal",
  secondary: "pink",
  type: "light",
};

export const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  JSON: 'JSON'
}

export const initialItem = {
  uid: "",
  name: "",
  url: "",
  httpMethod: HttpMethods.GET,
  time: Date(),
  response: "",
  error:  "",
  sended: null,
  completed: false,
  deleted: false,
};

export const initialAppState = {
  items: [],
  palette: initialPalette,
  visibilityFilter: "SHOW_ALL",
  showProgressBar: true,
  showDeleted: true,
  filter: false,
};

export const ActionType = {
  INIT_STATE: "INIT_STATE",
  LOAD_STATE: "LOAD_STATE",
  LOAD_STATE_FAILURE: "LOAD_STATE_FAILURE",
  IMPORT_ITEMS_STARTED: "IMPORT_ITEMS_STARTED",
  IMPORT_ITEMS_SUCCESS: "IMPORT_ITEMS_SUCCESS",
  IMPORT_ITEMS_FAILURE: "IMPORT_ITEMS_FAILURE",
  EXPORT_ITEMS_SUCCESS: "EXPORT_ITEMS_SUCCESS",
  ADD_ITEM: "ADD_ITEM",
  CHANGE_ITEM: "CHANGE_ITEM",
  CHANGE_PALETTE: "CHANGE_PALETTE",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
  TOGGLE_SHOW_PROGRESS_BAR: "TOGGLE_SHOW_PROGRESS_BAR",
  TOGGLE_SHOW_DELETED: "TOGGLE_SHOW_DELETED",
  TOGGLE_FILTER: "TOGGLE_FILTER",
}

export const SendStatuses = {
  SEND_STARTED: 'SEND_STARTED',
  SEND_SUCCESS: 'SEND_SUCCESS',
  SEND_FAILURE: 'SEND_FAILURE',
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
