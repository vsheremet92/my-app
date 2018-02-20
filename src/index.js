import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducers/index';
import { helloSaga } from './sagas/saga';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import  createBrowserHistory  from 'history/createBrowserHistory'

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(historyMiddleware, sagaMiddleware))
);

sagaMiddleware.run(helloSaga);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
