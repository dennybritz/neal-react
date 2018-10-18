"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageListItem = exports.ImageList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageList = exports.ImageList = function (_React$Component) {
  _inherits(ImageList, _React$Component);

  function ImageList() {
    _classCallCheck(this, ImageList);

    return _possibleConstructorReturn(this, (ImageList.__proto__ || Object.getPrototypeOf(ImageList)).apply(this, arguments));
  }

  _createClass(ImageList, [{
    key: "render",
    value: function render() {
      var _className = (0, _classnames2.default)("neal-image-list list-inline", { centered: this.props.centered });
      return _react2.default.createElement(
        "ul",
        { className: _className },
        this.props.children
      );
    }
  }]);

  return ImageList;
}(_react2.default.Component);

ImageList.propTypes = {
  centered: _propTypes2.default.bool.isRequired
};
ImageList.defaultProps = {
  centered: true
};

var ImageListItem = exports.ImageListItem = function (_React$Component2) {
  _inherits(ImageListItem, _React$Component2);

  function ImageListItem() {
    _classCallCheck(this, ImageListItem);

    return _possibleConstructorReturn(this, (ImageListItem.__proto__ || Object.getPrototypeOf(ImageListItem)).apply(this, arguments));
  }

  _createClass(ImageListItem, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "li",
        { className: "neal-image-list-item" },
        _react2.default.createElement(
          "a",
          { href: this.props.url, target: "_blank" },
          _react2.default.createElement("img", { src: this.props.src })
        )
      );
    }
  }]);

  return ImageListItem;
}(_react2.default.Component);

ImageListItem.propTypes = {
  src: _propTypes2.default.string.isRequired,
  url: _propTypes2.default.string
};