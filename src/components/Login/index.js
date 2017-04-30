import React, { Component } from 'react';
import firebase from 'firebase';

import Login from './Login';
import './style.css';

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.auth = this.auth.bind(this);
  }

  auth(email, password) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  render() {
    const { className } = this.props;
    return <Login className={className} onSubmit={this.auth} />;
  }
}
