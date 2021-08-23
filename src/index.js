import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import store from './stores/store';
import Container from "./container/Container";

import './index.css';

ReactDOM.render(
  //<React.StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  //</React.StrictMode>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();
