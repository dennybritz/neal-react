"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Team = exports.TeamMember = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _horizontalSplit = require("./horizontal-split");

var _bootstrap = require("../helpers/bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamMember = exports.TeamMember = function (_React$Component) {
  _inherits(TeamMember, _React$Component);

  function TeamMember() {
    _classCallCheck(this, TeamMember);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TeamMember).apply(this, arguments));
  }

  _createClass(TeamMember, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "card neal-team-member" },
        _react2.default.createElement("img", { className: "card-img-top neal-team-member-img img-responsive", src: this.props.imageUrl }),
        _react2.default.createElement(
          "div",
          { className: "card-block neal-team-member-profile" },
          _react2.default.createElement(
            "h4",
            { className: "card-title lead neal-team-member-name" },
            this.props.name,
            this.props.title ? ", " + this.props.title : null
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "div",
            { className: "neal-team-member-description" },
            this.props.children
          )
        )
      );
    }
  }]);

  return TeamMember;
}(_react2.default.Component);

TeamMember.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string,
  imageUrl: _react2.default.PropTypes.string.isRequired
};

var Team = exports.Team = function (_React$Component2) {
  _inherits(Team, _React$Component2);

  function Team() {
    _classCallCheck(this, Team);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Team).apply(this, arguments));
  }

  _createClass(Team, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "card-deck-wrapper neal-team" },
        _react2.default.createElement(
          _bootstrap.Row,
          null,
          _react2.default.createElement(
            "div",
            { className: "card-deck" },
            this.props.children.map(function (member, idx) {
              return _react2.default.createElement(
                _bootstrap.Col,
                { size: ["xs-12", "sm-6", "lg-4"], key: idx },
                member
              );
            })
          )
        )
      );
    }
  }]);

  return Team;
}(_react2.default.Component);

Team.propTypes = {
  // TODO: Enforce Member type
  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
};