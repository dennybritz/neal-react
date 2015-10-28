"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _helpersBootstrap = require("../helpers/bootstrap");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var HorizontalSplit = (function (_React$Component) {
  _inherits(HorizontalSplit, _React$Component);

  function HorizontalSplit() {
    _classCallCheck(this, HorizontalSplit);

    _get(Object.getPrototypeOf(HorizontalSplit.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(HorizontalSplit, [{
    key: "render",
    value: function render() {
      var numSections = this.props.children.length;
      if (12 % numSections !== 0) {
        return null;
      }

      return _react2["default"].createElement(
        _helpersBootstrap.Row,
        { className: "neal-horizontal-split neal-horizontal-split-" + this.props.padding },
        this.props.children.map(function (child, idx) {
          return _react2["default"].createElement(
            _helpersBootstrap.Col,
            { size: HorizontalSplit.COLUMN_CLASSES[numSections], className: "neal-horizontal-split-col", key: idx },
            child
          );
        })
      );
    }
  }], [{
    key: "COLUMN_CLASSES",
    value: {
      1: ["xs-12"],
      2: ["xs-12", "lg-6"],
      3: ["xs-12", "lg-4"],
      4: ["xs-12", "sm-6", "lg-3"],
      6: ["xs-12", "sm-6", "lg-4"],
      12: ["xs-12", "sm-6", "lg-3"]
    },
    enumerable: true
  }, {
    key: "propTypes",
    value: {
      padding: _react2["default"].PropTypes.oneOf(["sm", "md", "lg"])
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      padding: "sm"
    },
    enumerable: true
  }]);

  return HorizontalSplit;
})(_react2["default"].Component);

exports.HorizontalSplit = HorizontalSplit;