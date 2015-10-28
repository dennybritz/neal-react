"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _helpersBootstrap = require("../helpers/bootstrap");

var ModalHeader = (function (_React$Component) {
  _inherits(ModalHeader, _React$Component);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    _get(Object.getPrototypeOf(ModalHeader.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ModalHeader, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "modal-header" },
        _react2["default"].createElement(
          "button",
          { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
          _react2["default"].createElement(
            "span",
            { "aria-hidden": "true" },
            "×"
          ),
          _react2["default"].createElement(
            "span",
            { className: "sr-only" },
            "Close"
          )
        ),
        _react2["default"].createElement(
          "h4",
          { className: "modal-title lead" },
          this.props.title
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      title: _react2["default"].PropTypes.string.isRequired
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      title: "Sign up"
    },
    enumerable: true
  }]);

  return ModalHeader;
})(_react2["default"].Component);

var ModalFooter = (function (_React$Component2) {
  _inherits(ModalFooter, _React$Component2);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    _get(Object.getPrototypeOf(ModalFooter.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ModalFooter, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "modal-footer" },
        _react2["default"].createElement(
          "button",
          { type: "submit", className: "btn btn-primary btn-block btn-ghost" },
          "Sign up"
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      buttonText: _react2["default"].PropTypes.string.isRequired
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      buttonText: "Sign up"
    },
    enumerable: true
  }]);

  return ModalFooter;
})(_react2["default"].Component);

var SignupModal = (function (_React$Component3) {
  _inherits(SignupModal, _React$Component3);

  function SignupModal() {
    var _this = this;

    _classCallCheck(this, SignupModal);

    _get(Object.getPrototypeOf(SignupModal.prototype), "constructor", this).apply(this, arguments);

    this.state = { name: null, email: null, password: null };

    this.handleChange = function (e) {
      _this.setState(_defineProperty({}, "" + e.target.name, e.target.value));
    };

    this.handleSubmit = function (e) {
      e.preventDefault();
      if (_this.props.onSubmit) {
        _this.props.onSubmit(_this.state);
      }
    };
  }

  _createClass(SignupModal, [{
    key: "render",
    value: function render() {
      var modalId = this.props.modalId;
      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          { className: "modal fade neal-signup-modal", key: modalId, id: modalId,
            tabIndex: "-1", role: "dialog", "aria-hidden": "true" },
          _react2["default"].createElement(
            "div",
            { className: "modal-dialog", role: "document" },
            _react2["default"].createElement(
              "div",
              { className: "modal-content" },
              _react2["default"].createElement(ModalHeader, { title: this.props.title }),
              _react2["default"].createElement(
                "form",
                { className: "form-vertical", onSubmit: this.handleSubmit },
                _react2["default"].createElement(
                  "div",
                  { className: "modal-body" },
                  _react2["default"].createElement(SignupModal.Input, { name: "name", required: true, label: "Name", placeholder: "Name",
                    onChange: this.handleChange, value: this.state.name }),
                  _react2["default"].createElement(SignupModal.Input, { type: "email", required: true, name: "email", label: "Email", placeholder: "Email",
                    onChange: this.handleChange, value: this.state.email }),
                  _react2["default"].createElement(SignupModal.Input, { type: "password", required: true, name: "password", label: "Password", placeholder: "Password",
                    onChange: this.handleChange, value: this.state.password })
                ),
                _react2["default"].createElement(ModalFooter, { buttonText: this.props.buttonText })
              )
            )
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      title: _react2["default"].PropTypes.string.isRequired,
      buttonText: _react2["default"].PropTypes.string.isRequired,
      modalId: _react2["default"].PropTypes.string.isRequired,
      onSubmit: _react2["default"].PropTypes.func
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      title: "Sign up",
      buttonText: "Sign up",
      modalId: "signup-modal"
    },
    enumerable: true
  }]);

  return SignupModal;
})(_react2["default"].Component);

exports.SignupModal = SignupModal;

SignupModal.Input = (function (_React$Component4) {
  _inherits(_class, _React$Component4);

  function _class() {
    _classCallCheck(this, _class);

    _get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "form-group neal-signup-modal-input" },
        _react2["default"].createElement(
          "label",
          { className: "sr-only", htmlFor: this.props.name },
          this.props.label
        ),
        _react2["default"].createElement("input", _extends({ type: "password", className: "form-control", name: this.props.name,
          placeholder: this.props.placeholder }, this.props))
      );
    }
  }], [{
    key: "propTypes",
    value: {
      type: _react2["default"].PropTypes.string,
      name: _react2["default"].PropTypes.string.isRequired,
      label: _react2["default"].PropTypes.string.isRequired,
      placeholder: _react2["default"].PropTypes.string.isRequired
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      type: "text"
    },
    enumerable: true
  }]);

  return _class;
})(_react2["default"].Component);