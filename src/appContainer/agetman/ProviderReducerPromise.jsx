import React/*, { useState, useEffect }*/ from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import { useSnackbar } from "notistack";

import Container from './container/Container';
import RootReducer from './reducers/RootReducer';
import { loadState, saveState } from './model/localStorage';
//import { loadState, saveState } from './model/localStoragePromise';

const persistedState = loadState();

const store = createStore(RootReducer, persistedState, window.devToolsExtension && window.devToolsExtension());

store.subscribe(() => saveState(store.getState()));

export default function ProviderReducer () {
/*
	// Initial state
  const [persistedState, setPersistedState] = useState({});
  // Other hooks
  const { enqueueSnackbar } = useSnackbar();

  // On first render load items
  useEffect(() => {
    // Load initial state
    loadState()
      // Set state
      .then(persistedState => setPersistedState(persistedState))
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
  }, [enqueueSnackbar]);

  const store = createStore(RootReducer, persistedState, window.devToolsExtension && window.devToolsExtension());

  store.subscribe(
    () => {
      saveState(store.getState())
        .catch(err => {
          console.error(err);
          enqueueSnackbar(err.message, { variant: "error" });
        });
    }
  );
*/

  return (
	  <Provider store={store} >
	    <Container />
	  </Provider>
	);
}
