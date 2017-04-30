import React from 'react';
import classnames from 'classnames';

import { Checkbox, RaisedButton, TextField} from 'material-ui';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './style.css';

export default function Login(props) {
  return (
    <div className={classnames('Login', props.className)}>
      <h1>
        Login
      </h1>
      <form method="post">
        <Grid>
          <Row>
            <Col xs={6} md={3}>
            <TextField
              hintText="example@domain.com"
              floatingLabelText="Enter your email"
            />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3}>
            <TextField
              floatingLabelText="Password"
              type="password"
            />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3}>
            <Checkbox
            label="Remember me"
            />
            </Col>
          </Row>
          <Row>
            <RaisedButton label="Login" fullWidth={true} primary={true} />
          </Row>
        </Grid>
      </form>
    </div>
  );
}
