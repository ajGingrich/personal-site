import React, { Fragment } from 'react';

// TODO: eslint on this guy
import ErrorBoundary from 'components/ErrorBoundary';

import Routes from './routes';

const Root = () => {
  return (
    <div>
      <Routes />
    </div>
  );
};

export default Root;
