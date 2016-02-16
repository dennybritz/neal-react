"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricingPlan = exports.PricingTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PricingTable = exports.PricingTable = function (_React$Component) {
  _inherits(PricingTable, _React$Component);

  function PricingTable() {
    _classCallCheck(this, PricingTable);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PricingTable).apply(this, arguments));
  }

  _createClass(PricingTable, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "neal-pricing-table" },
        _react2.default.createElement(
          _index.HorizontalSplit,
          null,
          this.props.children
        )
      );
    }
  }]);

  return PricingTable;
}(_react2.default.Component);

var PricingPlan = exports.PricingPlan = function (_React$Component2) {
  _inherits(PricingPlan, _React$Component2);

  function PricingPlan() {
    _classCallCheck(this, PricingPlan);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PricingPlan).apply(this, arguments));
  }

  _createClass(PricingPlan, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        { className: "card" },
        _react2.default.createElement(
          "div",
          { className: "card-header neal-pricing-plan-name" },
          this.props.name
        ),
        _react2.default.createElement(
          "div",
          { className: "card-block" },
          _react2.default.createElement(
            "div",
            { className: "text-xs-center neal-pricing-plan-price" },
            _react2.default.createElement(
              "h4",
              { className: "card-title neal-pricing-plan-price-amount" },
              this.props.price
            ),
            _react2.default.createElement(
              "span",
              { className: "neal-pricing-plan-price-period" },
              this.props.period
            )
          ),
          _react2.default.createElement(
            "p",
            { className: "card-text text-xs-center neal-pricing-plan-description" },
            this.props.description
          ),
          _react2.default.createElement(
            "p",
            { className: "card-text text-xs-center neal-pricing-plan-action" },
            _react2.default.createElement(
              "button",
              { className: "btn btn-ghost btn-primary btn-lg", onClick: this.props.onClick },
              this.props.buttonText
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "card-block neal-pricing-plan-features" },
          _react2.default.createElement(
            "ul",
            { className: "list-group list-group-flush" },
            Object.keys(this.props.features).map(function (name, idx) {
              var isEnabled = _this3.props.features[name];
              var _className = (0, _classnames2.default)("neal-pricing-plan-feature", { isEnabled: isEnabled, "isDisabled": !isEnabled });
              return _react2.default.createElement(
                "li",
                { key: idx, className: _className },
                name
              );
            })
          )
        )
      );
    }
  }]);

  return PricingPlan;
}(_react2.default.Component);

PricingPlan.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  description: _react2.default.PropTypes.string,
  price: _react2.default.PropTypes.node.isRequired,
  period: _react2.default.PropTypes.string,
  features: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.bool),
  buttonText: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func
};
PricingPlan.defaultProps = {
  period: "/month",
  buttonText: "Sign up"
};