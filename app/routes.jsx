import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import history from 'store/history';

import * as containers from 'containers';

const Routes = ({ store }) => (
  <Router history={syncHistoryWithStore(history, store)}>
    <Route component={containers.Layout.default} path="/">
      <IndexRedirect to="/home" />
      {Object.keys(containers).map((containerName) => {
        const container = containers[containerName];
        return container.routes && {
          ...container.routes(),
          key: containerName,
        };
      })}
    </Route>
  </Router>
);

Routes.propTypes = {
  store: PropTypes.object,
};

export default Routes;
