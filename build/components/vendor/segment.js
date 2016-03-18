"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Segment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Segment = exports.Segment = function (_React$Component) {
  _inherits(Segment, _React$Component);

  function Segment() {
    _classCallCheck(this, Segment);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Segment).apply(this, arguments));
  }

  _createClass(Segment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var writeKey = this.props.writeKey;
      var scriptProtocol = "https:" === document.location.protocol ? "https://" : "http://";
      var scriptSrc = scriptProtocol + "cdn.segment.com/analytics.js/v1/" + writeKey + "/analytics.min.js";
      jQuery.getScript(scriptSrc, function () {
        // Track Route changes
        if (_this2.props.history) {
          _this2.props.history.listen(function (newLocation) {
            analytics.page();
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { key: "segment" });
    }
  }]);

  return Segment;
}(_react2.default.Component);

Segment.propTypes = {
  writeKey: _react2.default.PropTypes.string.isRequired,
  history: _react2.default.PropTypes.object
};