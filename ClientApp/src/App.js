"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var Cart_1 = require("./pages/Cart");
var Store_1 = require("./pages/Store");
require("./custom.css");
exports.default = (function () { return (React.createElement(Layout_1.default, null,
    React.createElement(react_router_1.Route, { exact: true, path: "/", component: Store_1.default }),
    React.createElement(react_router_1.Route, { path: "/cart", component: Cart_1.default }))); });
//# sourceMappingURL=App.js.map