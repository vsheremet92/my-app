import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducers/index';
import { helloSaga } from './sagas/saga';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(helloSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
