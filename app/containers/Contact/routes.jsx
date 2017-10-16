import React from 'react';
import { Route } from 'react-router';

import Layout from './Layout';

const Routes = () => (
  <span>
    <Route path="contact" component={Layout} />
  </span>
);

export default Routes;
