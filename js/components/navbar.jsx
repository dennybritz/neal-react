import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import HamburgerIcon from './HamburgerIcon';

export class Navbar extends React.Component {
  static propTypes = {
    brand: PropTypes.node.isRequired,
    burgerColor: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    burgerColor: 'rgba(0, 0, 0, .5)', // bootstrap nav hamburger default
  };

  render() {
    const { brand, burgerColor, children, className } = this.props;
    const _className = classNames("navbar navbar-expand-md navbar-light fixed-top", className);

    console.log('brand :', brand);
    return (
      <header>
        <nav className={_className}>
          <span className="navbar-brand d-flex w-50 mr-auto">{brand}</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#header-nav" aria-label="toggle-navigation">
            <HamburgerIcon fill={burgerColor}/>
          </button>
          <div className="navbar-collapse collapse w-100" id="header-nav">
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              {children}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export class NavItem extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    dropdown: PropTypes.bool,
  };

  render() {
    const { dropdown, className, children, ...otherProps } = this.props;
    const _className = classNames("nav-item", { dropdown }, className);

    return (
      <li {...otherProps} className={_className}>
        { children }
      </li>
    );
  }
}
