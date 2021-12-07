import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { ROUTES } from 'constants/constants';

import Navigation from 'components/Navigation';
import PageLoader from 'components/PageLoader';
import ErrorBoundary from 'components/ErrorBoundary';
import Welcome from './pages/Welcome';

const AboutMe = lazy(() => import('./pages/AboutMe'));
const WorkExperience = lazy(() => import('./pages/WorkExperience'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const FourOhFourError = lazy(() => import('./pages/FourOhFourError'));

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navigation />
        <Toaster />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path={ROUTES.home} element={<Welcome />} />
            <Route path={ROUTES.about} element={<AboutMe />} />
            <Route path={ROUTES.experience} element={<WorkExperience />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={`${ROUTES.blog}/*`} element={<Blog />} />
            <Route path="*" element={<FourOhFourError />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default AppRoutes;
