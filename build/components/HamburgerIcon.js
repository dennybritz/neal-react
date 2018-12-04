'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HamburgerIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HamburgerIcon(_ref) {
  var fill = _ref.fill,
      height = _ref.height,
      width = _ref.width;

  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: width, height: height, viewBox: '0 0 1792 1792', 'aria-labelledby': 'title' },
    _react2.default.createElement(
      'title',
      { id: 'title' },
      'Hamburger'
    ),
    _react2.default.createElement('path', { fill: fill, d: 'M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z' })
  );
}

HamburgerIcon.propTypes = {
  fill: _propTypes2.default.string,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

HamburgerIcon.defaultProps = {
  fill: 'black',
  height: '20px',
  width: '20px'
};