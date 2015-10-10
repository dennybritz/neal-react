import React from 'react';
import {Col} from '../helpers/bootstrap.jsx'

class ModalHeader extends React.Component {
  render() {
    return (
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close</span>
        </button>
      </div>
    )
  }
}

export class SignupModal extends React.Component {
  
  static propTypes = {
    modalId: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    modalId: 'signup-modal'
  }

  render() {
    var modalId = this.props.modalId;
    return (
      <div>
        <div className="modal fade blitz-signup-modal" key={modalId} id={modalId} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <ModalHeader/>
              {this.renderModalBody()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderModalBody() {
    return (
      <div className="modal-body">
        <div className="container-fluid">
          <form className="form-vertical">
            <SignupModal.Input name="name" label="Name" placeholder="Name" />
            <SignupModal.Input type="email" name="email" label="Email" placeholder="Email" />
            <SignupModal.Input type="password" name="password" label="Password" placeholder="Password" />
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

SignupModal.Input = class extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    type: 'text'
  }

  render(){
    return (
      <div className="form-group blitz-signup-modal-input">
        <label className="sr-only" htmlFor={this.props.name}>{this.props.label}</label>
        <input type="password" className="form-control" name={this.props.name} placeholder={this.props.placeholder}/>
      </div>
    )
  }
}
