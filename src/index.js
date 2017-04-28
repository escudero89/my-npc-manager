import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes';

import './index.css';

// Needed for onTouchTap (material-ui)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Renders the DOM
ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
