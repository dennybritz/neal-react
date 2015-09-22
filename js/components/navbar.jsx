import React from 'react';

export default class Navbar extends React.Component {

  static propTypes = {
    brandName: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      text: React.PropTypes.string,
    })).isRequired
  }

  render() {
    return (
      <header className="blitz-header">
        <nav className="navbar navbar-static-top">
          <div className="container">
            <a className="navbar-brand hidden-xs-down" href="#">{this.props.brandName}</a>
            <ul className="nav navbar-nav pull-right">
              {this.props.items.map(function(item){
                return <Navbar.NavItem key={item.text}>{item.text}</Navbar.NavItem>
              })}
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

Navbar.NavItem = class extends React.Component {
  
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