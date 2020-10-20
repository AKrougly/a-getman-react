import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppContainer from './scripts/container/appContainer.js';
import RootReducer from './scripts/reducers/root';
import defaultStore from './scripts/model/initialState';

const store = createStore(RootReducer, defaultStore, window.devToolsExtension && window.devToolsExtension());

export default function ProviderReducer () {

  return (
	  <Provider store={store} >
	    <AppContainer />
	  </Provider>
	);
}
