import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navigation from 'components/Navigation';
import Welcome from 'components/Welcome';
import HomePage from 'pages/HomePage';
import Blog from 'pages/Blog';

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/blog" component={Blog} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
