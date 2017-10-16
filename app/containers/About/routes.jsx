import React from 'react';
import { Route } from 'react-router';

import Layout from './Layout';

const Routes = () => (
  <span>
    <Route path="about" component={Layout} />
  </span>
);

export default Routes;
