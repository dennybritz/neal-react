"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bootstrap = require("../helpers/bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = exports.Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        { className: "neal-footer navbar" },
        _react2.default.createElement(
          _bootstrap.Container,
          null,
          _react2.default.createElement(
            "div",
            { className: 'flex-grow-1 d-flex align-items-center justify-content-between' },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "div",
                { className: "neal-footer-brand" },
                "\xA9 ",
                this.props.brandName
              ),
              this.props.address,
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "mailto:" + this.props.email },
                  this.props.email
                )
              )
            ),
            this.renderSocialIcons()
          )
        )
      );
    }
  }, {
    key: "renderSocialIcons",
    value: function renderSocialIcons() {
      return _react2.default.createElement(
        "ul",
        { className: "nav navbar-nav neal-footer-social pull-right d-flex flex-row" },
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
      return _react2.default.createElement(
        "li",
        { className: "nav-item neal-footer-social-icon " + iconClass.replace("fa-", "") },
        _react2.default.createElement(
          "a",
          { href: url, target: "_blank" },
          _react2.default.createElement(
            "span",
            { className: "fa-stack" },
            _react2.default.createElement("i", { className: "fa fa-circle fa-stack-2x" }),
            _react2.default.createElement("i", { className: "fa " + iconClass + " fa-stack-1x fa-inverse" })
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

Footer.propTypes = {
  brandName: _propTypes2.default.node.isRequired,
  facebookUrl: _propTypes2.default.string,
  twitterUrl: _propTypes2.default.string,
  githubUrl: _propTypes2.default.string,
  email: _propTypes2.default.node,
  address: _propTypes2.default.node
};