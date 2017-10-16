import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import history from 'store/history';

import { makeRootReducer } from './reducers';

export default (initialState = {}) => {
  // Setup Middleware
  const middleware = [thunk, routerMiddleware(history)];

  // Setup Enhancers
  const enhancers = [];

  // TODO IF DEV
  let composeEnhancers = compose;
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension;
  }

  // Setup Store
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  return store;
};
