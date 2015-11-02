"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj["default"]; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

require("babel-polyfill");

var _helpersBootstrap = require("./helpers/bootstrap");

var bootstrapHelpers = _interopRequireWildcard(_helpersBootstrap);

var _componentsIndex = require("./components/index");

_defaults(exports, _interopExportWildcard(_componentsIndex, _defaults));

var BootstrapHelpers = bootstrapHelpers;
exports.BootstrapHelpers = BootstrapHelpers;