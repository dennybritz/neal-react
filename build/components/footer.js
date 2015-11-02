"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _helpersBootstrap = require("../helpers/bootstrap");

var _navbar = require("./navbar");

var _navbar2 = _interopRequireDefault(_navbar);

var Footer = (function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    _get(Object.getPrototypeOf(Footer.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "footer",
        { className: "neal-footer navbar" },
        _react2["default"].createElement(
          _helpersBootstrap.Container,
          null,
          _react2["default"].createElement(
            _helpersBootstrap.Row,
            null,
            _react2["default"].createElement(
              _helpersBootstrap.Col,
              { size: ["xs-12", "md-4"] },
              _react2["default"].createElement(
                "p",
                { className: "neal-footer-copyright" },
                "© ",
                new Date().getFullYear(),
                ", ",
                this.props.brandName
              ),
              this.props.address,
              _react2["default"].createElement(
                "p",
                null,
                _react2["default"].createElement(
                  "a",
                  { href: "mailto:" + this.props.email },
                  this.props.email
                )
              )
            ),
            _react2["default"].createElement(_helpersBootstrap.Col, { size: ["xs-12", "md-4"] }),
            _react2["default"].createElement(
              _helpersBootstrap.Col,
              { size: ["xs-12", "md-4"] },
              this.renderSocialIcons()
            )
          )
        )
      );
    }
  }, {
    key: "renderSocialIcons",
    value: function renderSocialIcons() {
      return _react2["default"].createElement(
        "ul",
        { className: "nav navbar-nav neal-footer-social pull-right" },
        this.renderSocialIcon("fa-twitter", this.props.twitterUrl),
        this.renderSocialIcon("fa-facebook", this.props.facebookUrl),
        this.renderSocialIcon("fa-github", this.props.githubUrl)
      );
    }
  }, {
    key: "renderSocialIcon",
    value: function renderSocialIcon(iconClass, url) {
      if (!url || !iconClass) {
        return null;
      }
      return _react2["default"].createElement(
        "li",
        { className: "nav-item neal-footer-social-icon " + iconClass.replace("fa-", "") },
        _react2["default"].createElement(
          "a",
          { href: url, target: "_blank" },
          _react2["default"].createElement(
            "span",
            { className: "fa-stack" },
            _react2["default"].createElement("i", { className: "fa fa-circle fa-stack-2x" }),
            _react2["default"].createElement("i", { className: "fa " + iconClass + " fa-stack-1x fa-inverse" })
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      brandName: _react2["default"].PropTypes.node.isRequired,
      facebookUrl: _react2["default"].PropTypes.string,
      twitterUrl: _react2["default"].PropTypes.string,
      githubUrl: _react2["default"].PropTypes.string,
      email: _react2["default"].PropTypes.string,
      address: _react2["default"].PropTypes.node
    },
    enumerable: true
  }]);

  return Footer;
})(_react2["default"].Component);

exports.Footer = Footer;

var FooterAddress = (function (_React$Component2) {
  _inherits(FooterAddress, _React$Component2);

  function FooterAddress() {
    _classCallCheck(this, FooterAddress);

    _get(Object.getPrototypeOf(FooterAddress.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(FooterAddress, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "neal-footer-address" },
        this.props.children
      );
    }
  }]);

  return FooterAddress;
})(_react2["default"].Component);

exports.FooterAddress = FooterAddress;