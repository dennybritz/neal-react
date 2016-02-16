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

var _bootstrap = require("../helpers/bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalHeader = function (_React$Component) {
  _inherits(ModalHeader, _React$Component);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalHeader).apply(this, arguments));
  }

  _createClass(ModalHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "modal-header" },
        _react2.default.createElement(
          "button",
          { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
          _react2.default.createElement(
            "span",
            { "aria-hidden": "true" },
            "×"
          ),
          _react2.default.createElement(
            "span",
            { className: "sr-only" },
            "Close"
          )
        ),
        _react2.default.createElement(
          "h4",
          { className: "modal-title lead" },
          this.props.title
        )
      );
    }
  }]);

  return ModalHeader;
}(_react2.default.Component);

ModalHeader.propTypes = {
  title: _react2.default.PropTypes.string.isRequired
};
ModalHeader.defaultProps = {
  title: "Sign up"
};

var ModalFooter = function (_React$Component2) {
  _inherits(ModalFooter, _React$Component2);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFooter).apply(this, arguments));
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
  buttonText: _react2.default.PropTypes.string.isRequired
};
ModalFooter.defaultProps = {
  buttonText: "Sign up"
};

var SignupModal = exports.SignupModal = function (_React$Component3) {
  _inherits(SignupModal, _React$Component3);

  function SignupModal() {
    var _Object$getPrototypeO;

    var _temp, _this3, _ret;

    _classCallCheck(this, SignupModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SignupModal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this3), _this3.state = {}, _this3.handleChange = function (e) {
      _this3.setState(_defineProperty({}, "" + e.target.name, e.target.value));
    }, _this3.handleSubmit = function (e) {
      e.preventDefault();
      if (_this3.props.onSubmit) {
        _this3.props.onSubmit(_this3.state);
      }
    }, _this3.renderBody = function () {
      if (_this3.props.children) return _this3.props.children;
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(SignupModal.Input, { name: "name", required: true, label: "Name", placeholder: "Name" }),
        _react2.default.createElement(SignupModal.Input, { type: "email", required: true, name: "email", label: "Email", placeholder: "Email" }),
        _react2.default.createElement(SignupModal.Input, { type: "password", required: true, name: "password", label: "Password", placeholder: "Password" })
      );
    }, _temp), _possibleConstructorReturn(_this3, _ret);
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
              _react2.default.createElement(ModalHeader, { title: this.props.title }),
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
  title: _react2.default.PropTypes.string.isRequired,
  buttonText: _react2.default.PropTypes.string.isRequired,
  modalId: _react2.default.PropTypes.string.isRequired,
  onSubmit: _react2.default.PropTypes.func
};
SignupModal.defaultProps = {
  title: "Sign up",
  buttonText: "Sign up",
  modalId: "signup-modal"
};


SignupModal.Input = (_temp2 = _class = function (_React$Component4) {
  _inherits(_class, _React$Component4);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "form-group neal-signup-modal-input" },
        _react2.default.createElement(
          "label",
          { className: "sr-only", htmlFor: this.props.name },
          this.props.label
        ),
        _react2.default.createElement("input", _extends({ type: "text", className: "form-control", name: this.props.name,
          placeholder: this.props.placeholder }, this.props))
      );
    }
  }]);

  return _class;
}(_react2.default.Component), _class.propTypes = {
  type: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  label: _react2.default.PropTypes.string.isRequired,
  placeholder: _react2.default.PropTypes.string.isRequired
}, _class.defaultProps = {
  type: "text"
}, _temp2);