"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerQuotes = exports.CustomerQuote = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _horizontalSplit = require("./horizontal-split");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerQuote = exports.CustomerQuote = function (_React$Component) {
  _inherits(CustomerQuote, _React$Component);

  function CustomerQuote() {
    _classCallCheck(this, CustomerQuote);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CustomerQuote).apply(this, arguments));
  }

  _createClass(CustomerQuote, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "neal-customer-quote" },
        _react2.default.createElement(
          "div",
          { className: "neal-customer-quote-quote" },
          this.props.children
        ),
        _react2.default.createElement(
          "div",
          { className: "neal-customer-quote-profile" },
          _react2.default.createElement("img", { className: "neal-customer-quote-img img-responsive", src: this.props.imageUrl }),
          _react2.default.createElement(
            "span",
            { className: "neal-customer-quote-name" },
            this.props.name
          ),
          _react2.default.createElement(
            "span",
            { className: "neal-customer-quote-title" },
            this.props.title ? ", " + this.props.title : null
          )
        )
      );
    }
  }]);

  return CustomerQuote;
}(_react2.default.Component);

CustomerQuote.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string,
  imageUrl: _react2.default.PropTypes.string.isRequired
};

var CustomerQuotes = exports.CustomerQuotes = function (_React$Component2) {
  _inherits(CustomerQuotes, _React$Component2);

  function CustomerQuotes() {
    _classCallCheck(this, CustomerQuotes);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CustomerQuotes).apply(this, arguments));
  }

  _createClass(CustomerQuotes, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "neal-customer-quotes" },
        _react2.default.createElement(
          _horizontalSplit.HorizontalSplit,
          null,
          this.props.children
        )
      );
    }
  }]);

  return CustomerQuotes;
}(_react2.default.Component);

CustomerQuotes.propTypes = {
  // TODO: Enforce CustomerQuote type
  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
};


CustomerQuotes.Quote = CustomerQuote;