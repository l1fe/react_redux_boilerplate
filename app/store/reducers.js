import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { Home } from 'containers';

export const makeRootReducer = asyncReducers => combineReducers({
  routing: routerReducer,
  home: combineReducers(Home.api.reducers),
  ...asyncReducers,
});

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
