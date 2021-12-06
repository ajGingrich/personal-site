import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navigation from 'components/Navigation';
import PageLoader from 'components/PageLoader';
import ErrorBoundary from 'components/ErrorBoundary';

const Welcome = lazy(() => import('./components/Welcome'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Blog = lazy(() => import('./pages/Blog'));

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navigation />
        <Toaster />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default AppRoutes;
