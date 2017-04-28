import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

import MainAppBar from './mui/MainAppBar';

const Routes = (props) => (
  <MuiThemeProvider>
    <Router {...props}>
      <div>
        <MainAppBar/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default Routes;
