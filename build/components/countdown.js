"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Countdown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = exports.Countdown = function (_React$Component) {
  _inherits(Countdown, _React$Component);

  function Countdown(props) {
    _classCallCheck(this, Countdown);

    var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this, props));

    _this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // update every second
      this.interval = setInterval(function () {
        var date = _this2.calculateCountdown(_this2.props.date);
        date ? _this2.setState(date) : _this2.stop();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: "calculateCountdown",
    value: function calculateCountdown(endDate) {
      var diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

      // clear countdown when date is reached
      if (diff <= 0) return false;

      var timeLeft = {
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
        millisec: 0
      };

      // calculate time difference between now and expected date
      if (diff >= 365.25 * 86400) {
        // 365.25 * 24 * 60 * 60
        timeLeft.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.years * 365.25 * 86400;
      }
      if (diff >= 86400) {
        // 24 * 60 * 60
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
      }
      if (diff >= 3600) {
        // 60 * 60
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
      }
      if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
      }
      timeLeft.sec = diff;

      return timeLeft;
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
    }
  }, {
    key: "addLeadingZeros",
    value: function addLeadingZeros(value) {
      value = String(value);
      while (value.length < 2) {
        value = '0' + value;
      }
      return value;
    }
  }, {
    key: "render",
    value: function render() {
      var countDown = this.state;

      return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("neal-countdown", this.props.className) },
        _react2.default.createElement(
          "span",
          { className: "countdown-col" },
          _react2.default.createElement(
            "span",
            { className: "countdown-col-element" },
            _react2.default.createElement(
              "strong",
              { className: "countdown-col-element-number" },
              this.addLeadingZeros(countDown.days)
            ),
            _react2.default.createElement(
              "span",
              { className: "countdown-col-element-text" },
              countDown.days === 1 ? 'Day' : 'Days'
            )
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "countdown-col" },
          _react2.default.createElement(
            "span",
            { className: "countdown-col-element" },
            _react2.default.createElement(
              "strong",
              { className: "countdown-col-element-number" },
              this.addLeadingZeros(countDown.hours)
            ),
            _react2.default.createElement(
              "span",
              { className: "countdown-col-element-text" },
              "Hours"
            )
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "countdown-col" },
          _react2.default.createElement(
            "span",
            { className: "countdown-col-element" },
            _react2.default.createElement(
              "strong",
              { className: "countdown-col-element-number" },
              this.addLeadingZeros(countDown.min)
            ),
            _react2.default.createElement(
              "span",
              { className: "countdown-col-element-text" },
              "Min"
            )
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "countdown-col" },
          _react2.default.createElement(
            "span",
            { className: "countdown-col-element" },
            _react2.default.createElement(
              "strong",
              { className: "countdown-col-element-number" },
              this.addLeadingZeros(countDown.sec)
            ),
            _react2.default.createElement(
              "span",
              { className: "countdown-col-element-text" },
              "Sec"
            )
          )
        )
      );
    }
  }]);

  return Countdown;
}(_react2.default.Component);

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string
};
Countdown.defaultProps = {
  date: new Date()
};