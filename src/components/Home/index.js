import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

export default class Home extends Component {

  render() {
    const { className } = this.props;
    return (
      <div className={classnames('Home', className)}>
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
