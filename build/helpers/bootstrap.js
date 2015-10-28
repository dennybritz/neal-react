"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Container = function Container(props) {
  var _className = (0, _classnames2["default"])({
    "container": !props.fluid,
    "container-fluid": props.fluid
  }, props.className);
  return _react2["default"].createElement(
    "div",
    _extends({}, props, { className: _className }),
    " ",
    props.children,
    " "
  );
};
exports.Container = Container;
var Row = function Row(props) {
  var _className = (0, _classnames2["default"])("row", props.className);
  return _react2["default"].createElement(
    "div",
    _extends({}, props, { className: _className }),
    props.children
  );
};
exports.Row = Row;
var Col = function Col(props) {
  var sizeClasses = (props.size || []).map(function (x) {
    return "col-" + x;
  }).join(" ");
  var _className = (0, _classnames2["default"])(sizeClasses, props.className);
  return _react2["default"].createElement(
    "div",
    _extends({}, props, { className: _className }),
    props.children
  );
};
exports.Col = Col;