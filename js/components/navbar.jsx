import React from "react";
import { Link } from "react-router";
import classNames from "classnames";

export class Navbar extends React.Component {

  static propTypes = {
    brand: React.PropTypes.node.isRequired
  }

  render() {
    return (
      <header className="blitz-navbar-wrapper">
        <nav className="navbar navbar-static-top blitz-navbar">
          <div className="container">
            <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse"
              data-target="#header-nav">
              &#9776;
            </button>
            <a className="navbar-brand hidden-sm-down" href="/">{this.props.brand}</a>
            <div className="collapse navbar-toggleable-sm" id="header-nav">
              <ul className="nav navbar-nav pull-right">
                {this.props.children}
              </ul>
            </div>
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
    let _className = classNames("nav-item", { dropdown: this.props.dropdown }, this.props.className);
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
      </a>);
  }
}

export class DropdownMenu extends React.Component {
  render() {
    return <div className="dropdown-menu" {... this.props}>{this.props.children}</div>;
  }
}
