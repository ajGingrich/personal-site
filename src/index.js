import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import configureStore from './store';

import Root from './root';

const render = Component => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

render(Root);
