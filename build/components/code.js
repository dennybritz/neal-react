"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _prism = require("../vendor/prism.js");

var _prism2 = _interopRequireDefault(_prism);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = exports.Code = function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Code).apply(this, arguments));
  }

  _createClass(Code, [{
    key: "render",
    value: function render() {
      var langClass = "language-" + this.props.lang;
      var highlightedCode = _prism2.default.highlight(this.props.children, _prism2.default.languages[this.props.lang]);
      var codeElement = _react2.default.createElement("code", { className: langClass, dangerouslySetInnerHTML: { __html: highlightedCode } });
      if (this.props.block) {
        return _react2.default.createElement(
          "pre",
          { className: langClass },
          codeElement
        );
      }
      return codeElement;
    }
  }]);

  return Code;
}(_react2.default.Component);

Code.propProps = {
  lang: _react2.default.PropTypes.string.isRequired,
  block: _react2.default.PropTypes.bool
};