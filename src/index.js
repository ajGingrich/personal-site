import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/css/all.css';

import Root from './Root';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

render(Root);
