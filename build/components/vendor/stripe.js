"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stripe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stripe = exports.Stripe = function (_React$Component) {
  _inherits(Stripe, _React$Component);

  function Stripe() {
    _classCallCheck(this, Stripe);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Stripe).apply(this, arguments));
  }

  _createClass(Stripe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var stripeKey = this.props.stripeKey;
      var stripeOptions = this.props.stripeOptions;
      jQuery.getScript("https://checkout.stripe.com/checkout.js", function (data, textStatus, jqxhr) {
        Stripe.StripeHandler = StripeCheckout.configure(Object.assign({}, { key: stripeKey }, stripeOptions));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { key: "stripe" });
    }
  }]);

  return Stripe;
}(_react2.default.Component);

Stripe.propTypes = {
  stripeKey: _react2.default.PropTypes.string.isRequired,
  // Optional options we pass to Stripe Checkout configuration
  stripeOptions: _react2.default.PropTypes.object
};