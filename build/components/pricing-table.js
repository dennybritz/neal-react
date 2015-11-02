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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require("./index");

var PricingTable = (function (_React$Component) {
  _inherits(PricingTable, _React$Component);

  function PricingTable() {
    _classCallCheck(this, PricingTable);

    _get(Object.getPrototypeOf(PricingTable.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(PricingTable, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "neal-pricing-table" },
        _react2["default"].createElement(
          _index.HorizontalSplit,
          null,
          this.props.children
        )
      );
    }
  }]);

  return PricingTable;
})(_react2["default"].Component);

exports.PricingTable = PricingTable;

var PricingPlan = (function (_React$Component2) {
  _inherits(PricingPlan, _React$Component2);

  function PricingPlan() {
    _classCallCheck(this, PricingPlan);

    _get(Object.getPrototypeOf(PricingPlan.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(PricingPlan, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react2["default"].createElement(
        "div",
        { className: "card neal-pricing-plan" },
        _react2["default"].createElement(
          "div",
          { className: "card-header neal-pricing-plan-name" },
          this.props.name
        ),
        _react2["default"].createElement(
          "div",
          { className: "card-block" },
          _react2["default"].createElement(
            "div",
            { className: "neal-pricing-plan-price" },
            _react2["default"].createElement(
              "h4",
              { className: "card-title neal-pricing-plan-price-amount" },
              this.props.price
            ),
            _react2["default"].createElement(
              "span",
              { className: "neal-pricing-plan-price-period" },
              this.props.period
            )
          ),
          _react2["default"].createElement(
            "p",
            { className: "card-text" },
            this.props.description
          ),
          _react2["default"].createElement(
            "button",
            { className: "btn btn-ghost btn-primary btn-lg",
              onClick: this.props.onClick },
            this.props.buttonText
          )
        ),
        _react2["default"].createElement(
          "ol",
          { className: "list-group list-group-flush neal-pricing-plan-features" },
          Object.keys(this.props.features).map(function (name, idx) {
            var isEnabled = _this.props.features[name];
            var _className = (0, _classnames2["default"])("list-group-item neal-pricing-plan-feature", { "isEnabled": isEnabled, "isDisabled": !isEnabled });
            return _react2["default"].createElement(
              "li",
              { key: idx, className: _className },
              name
            );
          })
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      name: _react2["default"].PropTypes.string.isRequired,
      description: _react2["default"].PropTypes.string,
      price: _react2["default"].PropTypes.node.isRequired,
      period: _react2["default"].PropTypes.string,
      features: _react2["default"].PropTypes.objectOf(_react2["default"].PropTypes.bool),
      buttonText: _react2["default"].PropTypes.string,
      onClick: _react2["default"].PropTypes.func
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      period: "/month",
      buttonText: "Sign up"
    },
    enumerable: true
  }]);

  return PricingPlan;
})(_react2["default"].Component);

exports.PricingPlan = PricingPlan;