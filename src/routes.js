import React, { Suspense, lazy } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navigation from 'components/Navigation';
import PageLoader from 'components/PageLoader';

const Welcome = lazy(() => import('./components/Welcome'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Blog = lazy(() => import('./pages/Blog'));

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/blog" component={Blog} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
