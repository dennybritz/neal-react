import React from "react";
import Section from "./section";
import { Col } from "../helpers/bootstrap";

export class SignupInline extends React.Component {

  static propTypes = {
    onSubmit: React.PropTypes.func,
  };

  state = { email: null, password: null };

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  };

  render() {
    return (
      <div className="neal-signup-inline">
        <form className="form-inline row" onSubmit={this.handleSubmit}>
          <Col className="form-group" size={["xs-12", "lg-5"]}>
            <label className="sr-only" htmlFor="email">Email address</label>
            <input type="email" required className="form-control" name="email" placeholder="Email"
              onChange={this.handleChange}/>
          </Col>
          <Col className="form-group" size={["xs-12", "lg-5"]}>
            <label className="sr-only" htmlFor="password">Password</label>
            <input type="password" required className="form-control" name="password" placeholder="Password"
              onChange={this.handleChange}/>
          </Col>
          <Col className="form-group" size={["xs-12", "lg-2"]}>
            <button type="submit" className="btn btn-primary btn-ghost">Sign up</button>
          </Col>
        </form>
      </div>
    );
  }
}
