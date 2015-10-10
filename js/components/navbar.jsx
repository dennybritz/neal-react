import React from 'react';

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
    )
  }

  renderNavItem(item) {
    return 
  }

}

export class NavItem extends React.Component {
  
  static propTypes = {
    href: React.PropTypes.string
  }

  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#">{this.props.children}</a>
      </li>
    );
  }

}