"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _horizontalSplit = require("./horizontal-split");

var _helpersBootstrap = require("../helpers/bootstrap");

var TeamMember = (function (_React$Component) {
  _inherits(TeamMember, _React$Component);

  function TeamMember() {
    _classCallCheck(this, TeamMember);

    _get(Object.getPrototypeOf(TeamMember.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(TeamMember, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "card neal-team-member" },
        _react2["default"].createElement("img", { className: "card-img-top neal-team-member-img img-responsive", src: this.props.imageUrl }),
        _react2["default"].createElement(
          "div",
          { className: "card-block neal-team-member-profile" },
          _react2["default"].createElement(
            "h4",
            { className: "card-title lead neal-team-member-name" },
            this.props.name,
            this.props.title ? ", " + this.props.title : null
          ),
          _react2["default"].createElement("br", null),
          _react2["default"].createElement(
            "div",
            { className: "neal-team-member-description" },
            this.props.children
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      name: _react2["default"].PropTypes.string.isRequired,
      title: _react2["default"].PropTypes.string,
      imageUrl: _react2["default"].PropTypes.string.isRequired
    },
    enumerable: true
  }]);

  return TeamMember;
})(_react2["default"].Component);

exports.TeamMember = TeamMember;

var Team = (function (_React$Component2) {
  _inherits(Team, _React$Component2);

  function Team() {
    _classCallCheck(this, Team);

    _get(Object.getPrototypeOf(Team.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Team, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "card-deck-wrapper neal-team" },
        _react2["default"].createElement(
          _helpersBootstrap.Row,
          null,
          _react2["default"].createElement(
            "div",
            { className: "card-deck" },
            this.props.children.map(function (member, idx) {
              return _react2["default"].createElement(
                _helpersBootstrap.Col,
                { size: ["xs-12", "sm-6", "lg-4"], key: idx },
                member
              );
            })
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      // TODO: Enforce Member type
      children: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)
    },
    enumerable: true
  }]);

  return Team;
})(_react2["default"].Component);

exports.Team = Team;