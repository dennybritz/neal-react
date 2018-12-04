"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = exports.Navbar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _HamburgerIcon = require("./HamburgerIcon");

var _HamburgerIcon2 = _interopRequireDefault(_HamburgerIcon);

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
      var _props = this.props,
          brand = _props.brand,
          burgerColor = _props.burgerColor,
          children = _props.children,
          className = _props.className;

      var _className = (0, _classnames2.default)("navbar navbar-expand-md navbar-light neal-navbar", className);

      return _react2.default.createElement(
        "header",
        { className: "neal-navbar-wrapper" },
        _react2.default.createElement(
          "nav",
          { className: _className },
          _react2.default.createElement(
            "span",
            { className: "navbar-brand d-flex w-50 mr-auto" },
            brand
          ),
          _react2.default.createElement(
            "button",
            { className: "navbar-toggler", type: "button", "data-toggle": "collapse",
              "data-target": "#header-nav", "aria-label": "toggle-navigation" },
            _react2.default.createElement(_HamburgerIcon2.default, { fill: burgerColor })
          ),
          _react2.default.createElement(
            "div",
            { className: "navbar-collapse collapse w-100", id: "header-nav" },
            _react2.default.createElement(
              "ul",
              { className: "nav navbar-nav ml-auto w-100 justify-content-end" },
              children
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
  burgerColor: _propTypes2.default.string,
  className: _propTypes2.default.string
};
Navbar.defaultProps = {
  burgerColor: 'rgba(0, 0, 0, .5)' // bootstrap nav hamburger default
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
      var _props2 = this.props,
          dropdown = _props2.dropdown,
          className = _props2.className,
          children = _props2.children,
          otherProps = _objectWithoutProperties(_props2, ["dropdown", "className", "children"]);

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