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

var _horizontalSplit = require("./horizontal-split");

var CustomerQuote = (function (_React$Component) {
  _inherits(CustomerQuote, _React$Component);

  function CustomerQuote() {
    _classCallCheck(this, CustomerQuote);

    _get(Object.getPrototypeOf(CustomerQuote.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(CustomerQuote, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "neal-customer-quote" },
        _react2["default"].createElement(
          "div",
          { className: "neal-customer-quote-quote" },
          this.props.children
        ),
        _react2["default"].createElement(
          "div",
          { className: "neal-customer-quote-profile" },
          _react2["default"].createElement("img", { className: "neal-customer-quote-img img-responsive", src: this.props.imageUrl }),
          _react2["default"].createElement(
            "span",
            { className: "neal-customer-quote-name" },
            this.props.name
          ),
          _react2["default"].createElement(
            "span",
            { className: "neal-customer-quote-title" },
            this.props.title ? ", " + this.props.title : null
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      name: _react2["default"].PropTypes.string.isRequired,
      title: _react2["default"].PropTypes.string,
      imageUrl: _react2["default"].PropTypes.string.isRequired
    },
    enumerable: true
  }]);

  return CustomerQuote;
})(_react2["default"].Component);

exports.CustomerQuote = CustomerQuote;

var CustomerQuotes = (function (_React$Component2) {
  _inherits(CustomerQuotes, _React$Component2);

  function CustomerQuotes() {
    _classCallCheck(this, CustomerQuotes);

    _get(Object.getPrototypeOf(CustomerQuotes.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(CustomerQuotes, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "neal-customer-quotes" },
        _react2["default"].createElement(
          _horizontalSplit.HorizontalSplit,
          null,
          this.props.children
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      // TODO: Enforce CustomerQuote type
      children: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)
    },
    enumerable: true
  }]);

  return CustomerQuotes;
})(_react2["default"].Component);

exports.CustomerQuotes = CustomerQuotes;

CustomerQuotes.Quote = CustomerQuote;