"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bootstrap = require("../helpers/bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalFooter = function (_React$Component) {
  _inherits(ModalFooter, _React$Component);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, (ModalFooter.__proto__ || Object.getPrototypeOf(ModalFooter)).apply(this, arguments));
  }

  _createClass(ModalFooter, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "modal-footer" },
        _react2.default.createElement(
          "button",
          { type: "submit", className: "btn btn-primary btn-block btn-ghost" },
          this.props.buttonText
        )
      );
    }
  }]);

  return ModalFooter;
}(_react2.default.Component);

ModalFooter.propTypes = {
  buttonText: _propTypes2.default.string.isRequired
};
ModalFooter.defaultProps = {
  buttonText: "Sign up"
};

var SignupModal = exports.SignupModal = function (_React$Component2) {
  _inherits(SignupModal, _React$Component2);

  function SignupModal() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, SignupModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = SignupModal.__proto__ || Object.getPrototypeOf(SignupModal)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {}, _this2.handleChange = function (e) {
      _this2.setState(_defineProperty({}, "" + e.target.name, e.target.value));
    }, _this2.handleSubmit = function (e) {
      e.preventDefault();
      if (_this2.props.onSubmit) {
        _this2.props.onSubmit(_this2.state);
      }
    }, _this2.renderBody = function () {
      if (_this2.props.children) return _this2.props.children;
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(SignupModal.Input, { type: "email", required: true, name: "email", label: "Email", placeholder: "Email" }),
        _react2.default.createElement(SignupModal.Input, { type: "password", required: true, name: "password", label: "Password", placeholder: "Password" })
      );
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(SignupModal, [{
    key: "render",
    value: function render() {
      var modalId = this.props.modalId;
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "modal fade neal-signup-modal", key: modalId, id: modalId,
            tabIndex: "-1", role: "dialog", "aria-hidden": "true" },
          _react2.default.createElement(
            "div",
            { className: "modal-dialog", role: "document" },
            _react2.default.createElement(
              "div",
              { className: "modal-content" },
              _react2.default.createElement(
                "button",
                { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                _react2.default.createElement(
                  "span",
                  { "aria-hidden": "true" },
                  "\xD7"
                ),
                _react2.default.createElement(
                  "span",
                  { className: "sr-only" },
                  "Close"
                )
              ),
              _react2.default.createElement(
                "form",
                { className: "form-vertical", onSubmit: this.handleSubmit, onChange: this.handleChange },
                _react2.default.createElement(
                  "div",
                  { className: "modal-body" },
                  this.renderBody()
                ),
                _react2.default.createElement(ModalFooter, { buttonText: this.props.buttonText })
              )
            )
          )
        )
      );
    }
  }]);

  return SignupModal;
}(_react2.default.Component);

SignupModal.propTypes = {
  title: _propTypes2.default.string.isRequired,
  buttonText: _propTypes2.default.string.isRequired,
  modalId: _propTypes2.default.string.isRequired,
  onSubmit: _propTypes2.default.func
};
SignupModal.defaultProps = {
  title: "Sign up",
  buttonText: "Sign up",
  modalId: "signup-modal"
};


SignupModal.Input = (_temp2 = _class = function (_React$Component3) {
  _inherits(_class, _React$Component3);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          name = _props.name,
          placeholder = _props.placeholder,
          type = _props.type,
          otherProps = _objectWithoutProperties(_props, ["label", "name", "placeholder", "type"]);

      return _react2.default.createElement(
        "div",
        { className: "form-group neal-signup-modal-input" },
        _react2.default.createElement(
          "label",
          { className: "sr-only", htmlFor: name },
          label
        ),
        _react2.default.createElement("input", _extends({ type: type, className: "form-control", name: name,
          placeholder: placeholder }, otherProps))
      );
    }
  }]);

  return _class;
}(_react2.default.Component), _class.propTypes = {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string.isRequired
}, _class.defaultProps = {
  type: "text"
}, _temp2);