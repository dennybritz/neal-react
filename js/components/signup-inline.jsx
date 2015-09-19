import React from 'react';
import Section from './section.jsx';
import {Row} from '../helpers/bootstrap.jsx'

export default class SignupInline extends React.Component {

  render() {
    return (
      <Section heading="Sign up" className="blitz-section-quick-signup">
        <form className="form-inline row">
         <div className="form-group col-sm-4">
          <label className="sr-only" htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Email"/>
        </div>
        <div className="form-group col-sm-4">
          <label className="sr-only" htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
      </Section>
    );
  }
}