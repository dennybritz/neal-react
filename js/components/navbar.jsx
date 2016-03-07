import React from "react";
import classNames from "classnames";

export class Navbar extends React.Component {

  static propTypes = {
    brand: React.PropTypes.node.isRequired,
  };

  render() {
    const _className = classNames("navbar neal-navbar", this.props.className);
    return (
      <header className="neal-navbar-wrapper">
        <nav className={_className}>
          <div className="container">
            <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse"
              data-target="#mobile-nav">
              &#9776;
            </button>
            <a className="navbar-brand hidden-sm-down" href="/">{this.props.brand}</a>
            <div className="navbar-toggleable-sm hidden-sm-down" id="header-nav">
              <ul className="nav navbar-nav pull-right">
                {this.props.children}
              </ul>
            </div>
            <div className="collapse navbar-toggleable-sm hidden-md-up neal-mobile-nav" id="mobile-nav">
              <ul className="nav navbar-nav">
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
    dropdown: React.PropTypes.bool,
  };

  render() {
    const _className = classNames("nav-item", { dropdown: this.props.dropdown }, this.props.className);
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
