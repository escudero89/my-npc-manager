import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as firebase from 'firebase'

import Routes from './routes';

import './index.css';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD6Xy5i_qW0WhIp326q4Bz8D1nUGOsSJrE",
  authDomain: "my-npc-manager.firebaseapp.com",
  databaseURL: "https://my-npc-manager.firebaseio.com",
  projectId: "my-npc-manager",
  storageBucket: "my-npc-manager.appspot.com",
  messagingSenderId: "693674493321"
});

// Needed for onTouchTap (material-ui)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Renders the DOM
ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
