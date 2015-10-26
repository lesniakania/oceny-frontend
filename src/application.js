import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import Routes from './routes';
import { configureStore } from './Store';

import createHistory from 'history/lib/createBrowserHistory'

var app = document.getElementById('app');

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, createHistory, reduxReactRouter);

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter routes={Routes} />
  </Provider>,
  app
);
