import React, { Component } from 'react';

import Login from './Login';
import './style.css';

export default class LoginContainer extends Component {
  render() {
    const { className } = this.props;
    return <Login className={className} />;
  }
}
