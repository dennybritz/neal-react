"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupInline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bootstrap = require("../helpers/bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignupInline = exports.SignupInline = function (_React$Component) {
  _inherits(SignupInline, _React$Component);

  function SignupInline() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SignupInline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SignupInline.__proto__ || Object.getPrototypeOf(SignupInline)).call.apply(_ref, [this].concat(args))), _this), _this.state = { email: null }, _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, "" + e.target.name, e.target.value));
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      if (_this.props.onSubmit) {
        _this.props.onSubmit(_this.state);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SignupInline, [{
    key: "render",
    value: function render() {
      var CTA = this.props.CTA;


      return _react2.default.createElement(
        "form",
        { className: "form-inline d-flex justify-content-center", onSubmit: this.handleSubmit },
        _react2.default.createElement(
          "div",
          { className: "form-group input-group" },
          _react2.default.createElement(
            "label",
            { className: "sr-only", htmlFor: "email" },
            "Email address"
          ),
          _react2.default.createElement("input", {
            type: "email",
            name: "email",
            placeholder: "Enter email address",
            className: "form-control h-100 w-100",
            onChange: this.handleChange,
            required: true
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "form-group button-group" },
          _react2.default.createElement(
            "button",
            { type: "submit", className: "btn btn-primary " },
            CTA
          )
        )
      );
    }
  }]);

  return SignupInline;
}(_react2.default.Component);

SignupInline.propTypes = {
  CTA: _propTypes2.default.string,
  onSubmit: _propTypes2.default.func
};
SignupInline.defaultProps = {
  CTA: 'Submit',
  onSubmit: function onSubmit() {}
};