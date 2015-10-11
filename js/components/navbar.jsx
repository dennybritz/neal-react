import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

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
  
  static propTypes = {
    dropdown: React.PropTypes.bool
  }

  render() {
    var _className = classNames('nav-item', { dropdown: this.props.dropdown }, this.props.className)
    return (
      <li {...this.props} className={_className}>
        { this.props.children }
      </li>
    );
  }
}

export class DropdownToggle extends React.Component {
  render() {
    return (
      <a className="nav-link" data-toggle="dropdown" role="button" {... this.props}>
        {this.props.children}
      </a>)
  }
}

export class DropdownMenu extends React.Component {
  render() {
    return <div className="dropdown-menu" {... this.props}>{this.props.children}</div>
  }
}