"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    _get(Object.getPrototypeOf(Navbar.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "header",
        { className: "neal-navbar-wrapper" },
        _react2["default"].createElement(
          "nav",
          { className: "navbar navbar-static-top neal-navbar" },
          _react2["default"].createElement(
            "div",
            { className: "container" },
            _react2["default"].createElement(
              "button",
              { className: "navbar-toggler hidden-md-up", type: "button", "data-toggle": "collapse",
                "data-target": "#mobile-nav" },
              "☰"
            ),
            _react2["default"].createElement(
              "a",
              { className: "navbar-brand hidden-sm-down", href: "/" },
              this.props.brand
            ),
            _react2["default"].createElement(
              "div",
              { className: "navbar-toggleable-sm hidden-sm-down", id: "header-nav" },
              _react2["default"].createElement(
                "ul",
                { className: "nav navbar-nav pull-right" },
                this.props.children
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "collapse navbar-toggleable-sm hidden-md-up neal-mobile-nav", id: "mobile-nav" },
              _react2["default"].createElement(
                "ul",
                { className: "nav navbar-nav" },
                this.props.children
              )
            )
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      brand: _react2["default"].PropTypes.node.isRequired
    },
    enumerable: true
  }]);

  return Navbar;
})(_react2["default"].Component);

exports.Navbar = Navbar;

var NavItem = (function (_React$Component2) {
  _inherits(NavItem, _React$Component2);

  function NavItem() {
    _classCallCheck(this, NavItem);

    _get(Object.getPrototypeOf(NavItem.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(NavItem, [{
    key: "render",
    value: function render() {
      var _className = (0, _classnames2["default"])("nav-item", { dropdown: this.props.dropdown }, this.props.className);
      return _react2["default"].createElement(
        "li",
        _extends({}, this.props, { className: _className }),
        this.props.children
      );
    }
  }], [{
    key: "propTypes",
    value: {
      dropdown: _react2["default"].PropTypes.bool
    },
    enumerable: true
  }]);

  return NavItem;
})(_react2["default"].Component);

exports.NavItem = NavItem;

var DropdownToggle = (function (_React$Component3) {
  _inherits(DropdownToggle, _React$Component3);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    _get(Object.getPrototypeOf(DropdownToggle.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DropdownToggle, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "a",
        _extends({ className: "nav-link", "data-toggle": "dropdown", role: "button" }, this.props),
        this.props.children
      );
    }
  }]);

  return DropdownToggle;
})(_react2["default"].Component);

exports.DropdownToggle = DropdownToggle;

var DropdownMenu = (function (_React$Component4) {
  _inherits(DropdownMenu, _React$Component4);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    _get(Object.getPrototypeOf(DropdownMenu.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        _extends({ className: "dropdown-menu" }, this.props),
        this.props.children
      );
    }
  }]);

  return DropdownMenu;
})(_react2["default"].Component);

exports.DropdownMenu = DropdownMenu;