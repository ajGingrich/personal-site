import React from 'react';

import ErrorBoundary from 'components/ErrorBoundary';

import Routes from './routes';

const Root = () => {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
};

export default Root;
