"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenu = exports.DropdownToggle = exports.NavItem = exports.Navbar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = exports.Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _className = (0, _classnames2.default)("navbar neal-navbar", this.props.className);
      return _react2.default.createElement(
        "header",
        { className: "neal-navbar-wrapper" },
        _react2.default.createElement(
          "nav",
          { className: _className },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "button",
              { className: "navbar-toggler hidden-md-up", type: "button", "data-toggle": "collapse",
                "data-target": "#mobile-nav" },
              "\u2630"
            ),
            _react2.default.createElement(
              "a",
              { className: "navbar-brand hidden-sm-down", href: "/" },
              this.props.brand
            ),
            _react2.default.createElement(
              "div",
              { className: "navbar-toggleable-sm hidden-sm-down", id: "header-nav" },
              _react2.default.createElement(
                "ul",
                { className: "nav navbar-nav pull-right" },
                this.props.children
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "collapse navbar-toggleable-sm hidden-md-up neal-mobile-nav", id: "mobile-nav" },
              _react2.default.createElement(
                "ul",
                { className: "nav navbar-nav" },
                this.props.children
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

Navbar.propTypes = {
  brand: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

var NavItem = exports.NavItem = function (_React$Component2) {
  _inherits(NavItem, _React$Component2);

  function NavItem() {
    _classCallCheck(this, NavItem);

    return _possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).apply(this, arguments));
  }

  _createClass(NavItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          dropdown = _props.dropdown,
          className = _props.className,
          children = _props.children,
          otherProps = _objectWithoutProperties(_props, ["dropdown", "className", "children"]);

      var _className = (0, _classnames2.default)("nav-item", { dropdown: dropdown }, className);

      return _react2.default.createElement(
        "li",
        _extends({}, otherProps, { className: _className }),
        children
      );
    }
  }]);

  return NavItem;
}(_react2.default.Component);

NavItem.propTypes = {
  className: _propTypes2.default.string,
  dropdown: _propTypes2.default.bool
};

var DropdownToggle = exports.DropdownToggle = function (_React$Component3) {
  _inherits(DropdownToggle, _React$Component3);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    return _possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).apply(this, arguments));
  }

  _createClass(DropdownToggle, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          otherProps = _objectWithoutProperties(_props2, ["children"]);

      return _react2.default.createElement(
        "a",
        _extends({ className: "nav-link", "data-toggle": "dropdown", role: "button" }, otherProps),
        children
      );
    }
  }]);

  return DropdownToggle;
}(_react2.default.Component);

var DropdownMenu = exports.DropdownMenu = function (_React$Component4) {
  _inherits(DropdownMenu, _React$Component4);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          otherProps = _objectWithoutProperties(_props3, ["children"]);

      return _react2.default.createElement(
        "div",
        _extends({ className: "dropdown-menu" }, otherProps),
        children
      );
    }
  }]);

  return DropdownMenu;
}(_react2.default.Component);