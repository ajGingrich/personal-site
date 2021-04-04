import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import FourOhFourError from 'components/FourOhFourError'
import HomePage from 'pages/HomePage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={FourOhFourError} />
      </Switch>
    </Router>
  )
};

export default Routes;
