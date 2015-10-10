import React from 'react';
import {Link} from 'react-router';

export class Navbar extends React.Component {

  static propTypes = {
    brandName: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <header className="blitz-navbar-wrapper">
        <nav className="navbar navbar-static-top blitz-navbar">
          <div className="container">
            <a className="navbar-brand hidden-xs-down" href="#">{this.props.brandName}</a>
            <ul className="nav navbar-nav pull-right">
              {this.props.children}
            </ul>
          </div>
        </nav>
      </header>
    );
  }

}

export class NavItem extends React.Component {
  render() {
    return (
      <li className="nav-item" {...this.props}>
        { this.props.children }
      </li>
    );
  }
}