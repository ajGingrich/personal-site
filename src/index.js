import React from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/css/all.css';

import Root from './Root';

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root'),
  );
};

render(Root);
