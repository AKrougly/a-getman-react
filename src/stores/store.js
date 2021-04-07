import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';

import { initialAppState, } from './consts';
import { rootReducer } from '../reducers/rootReducer';
import { loadState, saveState, } from './api/apiLocalStorage';

const store = createStore (
  rootReducer, initialAppState, applyMiddleware(thunk),
);

store.dispatch(loadState());

store.subscribe(() => saveState(store.getState()));

export default store;