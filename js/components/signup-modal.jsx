import React from "react";
import PropTypes from 'prop-types';
import { Col } from "../helpers/bootstrap";

class ModalHeader extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: "Sign up",
  };

  render() {
    return (
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close</span>
        </button>
        <h4 className="modal-title lead">{this.props.title}</h4>
      </div>
    );
  }
}

class ModalFooter extends React.Component {

  static propTypes = {
    buttonText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    buttonText: "Sign up",
  };

  render() {
    return (
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary btn-block btn-ghost">{this.props.buttonText}</button>
      </div>
    );
  }
}


export class SignupModal extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    modalId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    title: "Sign up",
    buttonText: "Sign up",
    modalId: "signup-modal",
  };

  state = { };

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  };

  renderBody = () => {
    if (this.props.children) return this.props.children;
    return (
      <div>
        <SignupModal.Input name="name" required label="Name" placeholder="Name"/>
        <SignupModal.Input type="email" required name="email" label="Email" placeholder="Email"/>
        <SignupModal.Input type="password" required name="password" label="Password" placeholder="Password"/>
      </div>
    );
  };

  render() {
    const modalId = this.props.modalId;
    return (
      <div>
        <div className="modal fade neal-signup-modal" key={modalId} id={modalId}
        tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <ModalHeader title={this.props.title}/>
              <form className="form-vertical" onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <div className="modal-body">
                { this.renderBody() }
              </div>
              <ModalFooter buttonText={this.props.buttonText} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

SignupModal.Input = class extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: "text",
  };

  render() {
    const { label, name, placeholder, type, ...otherProps } = this.props;

    return (
      <div className="form-group neal-signup-modal-input">
        <label className="sr-only" htmlFor={name}>{label}</label>
        <input type={type} className="form-control" name={name}
          placeholder={placeholder} {...otherProps}/>
      </div>
    );
  }
};
