"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var googleAnalyticsKey = this.props.googleAnalyticsKey;
      var segmentKey = this.props.segmentKey;
      var stripeKey = this.props.stripeKey;
      var history = this.props.history;

      return _react2.default.createElement(
        "div",
        { className: "neal-app" },
        this.props.children,
        googleAnalyticsKey ? _react2.default.createElement(_index.GoogleAnalytics, { account: googleAnalyticsKey, history: history }) : null,
        segmentKey ? _react2.default.createElement(_index.Segment, { writeKey: segmentKey, history: history }) : null,
        stripeKey ? _react2.default.createElement(_index.Stripe, { stripeKey: stripeKey }) : null
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  googleAnalyticsKey: _react2.default.PropTypes.string,
  segmentKey: _react2.default.PropTypes.string,
  stripeKey: _react2.default.PropTypes.string,
  history: _react2.default.PropTypes.object
};