import React from 'react';

export default class SignupModal extends React.Component {
  
  render() {
    return (
      <div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {this.renderModalHeader()}
              {this.renderModalBody()}
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          Launch demo modal
        </button>
      </div>
    );
  }

  renderModalBody() {
    return (
      <div className="modal-body">
        <div className="container-fluid">
          <form className="form-vertical">
            <div className="form-group">
              <label className="sr-only" htmlFor="name">Name</label>
              <input type="name" className="form-control" id="name" placeholder="Name"/>
            </div>          
            <div className="form-group">
              <label className="sr-only" htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Sign up</button>
          </form>
        </div>
      </div>
    )
  }

  renderModalHeader() {
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
