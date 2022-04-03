import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import configureStore from './store';

import Routes from './routes';

const render = Component => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>
  );
};

render(Routes);
