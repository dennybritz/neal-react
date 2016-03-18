"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleAnalytics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleAnalytics = exports.GoogleAnalytics = function (_React$Component) {
  _inherits(GoogleAnalytics, _React$Component);

  function GoogleAnalytics() {
    _classCallCheck(this, GoogleAnalytics);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GoogleAnalytics).apply(this, arguments));
  }

  _createClass(GoogleAnalytics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _arguments = arguments,
          _this2 = this;

      window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(_arguments);
      };ga.l = +new Date();
      var account = this.props.account;
      // const scriptProtocol = ("https:" === document.location.protocol ? "https://ssl" : "http://www");
      var scriptSrc = "//google-analytics.com/analytics.js";
      jQuery.getScript(scriptSrc, function () {
        // Track Route changes
        ga("create", account, "auto");
        if (_this2.props.history) {
          _this2.props.history.listen(function (newLocation) {
            ga("send", "pageview", newLocation.pathname);
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { key: "google-analytics" });
    }
  }]);

  return GoogleAnalytics;
}(_react2.default.Component);

GoogleAnalytics.propTypes = {
  account: _react2.default.PropTypes.string.isRequired,
  history: _react2.default.PropTypes.object
};