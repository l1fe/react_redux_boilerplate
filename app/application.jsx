import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from 'store/createStore';

// Setup Mount Node
const MOUNT_NODE = document.getElementById('root');

// Setup Store
const initialState = window.___INITIAL_STATE__;
export const store = createStore(initialState);

// Render
let render = () => {
  const Routes = require('./routes.jsx').default;

  ReactDOM.render(
    <Provider store={store}>
      <Routes store={store} />
    </Provider>, MOUNT_NODE);
};

if (module.hot) {
  // Development render functions
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require('redbox-react').default;

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
  };

  // Wrap render in try/catch
  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  // Setup hot module replacement
  module.hot.accept('./routes.jsx', () => {
    setImmediate(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render();
    });
  });
}

render();
