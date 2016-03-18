"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalSplit = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bootstrap = require("../helpers/bootstrap");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalSplit = exports.HorizontalSplit = function (_React$Component) {
  _inherits(HorizontalSplit, _React$Component);

  function HorizontalSplit() {
    _classCallCheck(this, HorizontalSplit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HorizontalSplit).apply(this, arguments));
  }

  _createClass(HorizontalSplit, [{
    key: "render",
    value: function render() {
      var numSections = this.props.children.length;
      if (12 % numSections !== 0) {
        return null;
      }

      return _react2.default.createElement(
        _bootstrap.Row,
        { className: "neal-horizontal-split neal-horizontal-split-" + this.props.padding },
        this.props.children.map(function (child, idx) {
          return _react2.default.createElement(
            _bootstrap.Col,
            { size: HorizontalSplit.COLUMN_CLASSES[numSections], className: "neal-horizontal-split-col", key: idx },
            child
          );
        })
      );
    }
  }]);

  return HorizontalSplit;
}(_react2.default.Component);

HorizontalSplit.COLUMN_CLASSES = {
  1: ["xs-12"],
  2: ["xs-12", "lg-6"],
  3: ["xs-12", "lg-4"],
  4: ["xs-12", "sm-6", "lg-3"],
  6: ["xs-12", "sm-6", "lg-4"],
  12: ["xs-12", "sm-6", "lg-3"]
};
HorizontalSplit.propTypes = {
  padding: _react2.default.PropTypes.oneOf(["sm", "md", "lg"])
};
HorizontalSplit.defaultProps = {
  padding: "sm"
};