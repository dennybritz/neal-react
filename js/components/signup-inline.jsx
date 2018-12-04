import React from "react";
import PropTypes from 'prop-types';
import { Col } from "../helpers/bootstrap";

export class SignupInline extends React.Component {
  static propTypes = {
    CTA: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    CTA: 'Submit',
    onSubmit: () => {},
  };

  state = { email: null };

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  };

  render() {
    const { CTA } = this.props;

    return (
      <form className="form-inline d-flex justify-content-center" onSubmit={this.handleSubmit}>
        <div className="form-group input-group">
          <label className="sr-only" htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="form-control h-100 w-100"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group button-group">
          <button type="submit" className="btn btn-primary ">{CTA}</button>
        </div>
      </form>
    );
  }
}
