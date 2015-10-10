import React from 'react';
import Section from './section.jsx';
import {Col} from '../helpers/bootstrap.jsx'

export class SignupInline extends React.Component {

  render() {
    return (
      <div className="blitz-signup-inline">
        <form className="form-inline row">
          <Col className="form-group" size={['xs-12', 'lg-5']}>
            <label className="sr-only" htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Email"/>
          </Col>
          <Col className="form-group" size={['xs-12', 'lg-5']}>
            <label className="sr-only" htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"/>
          </Col>
          <Col className="form-group" size={['xs-12', 'lg-2']}>
            <button type="submit" className="btn btn-primary">Sign up</button>
          </Col>
        </form>
      </div>
    );
  }
}