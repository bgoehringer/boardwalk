"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
require("./NavMenu.css");
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavMenu.prototype.render = function () {
        var itemsInCart = this.props.itemsInCart;
        return (React.createElement("header", null,
            React.createElement(reactstrap_1.Navbar, { className: "navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3", light: true },
                React.createElement(reactstrap_1.Container, null,
                    React.createElement("div", { className: "w-25" },
                        React.createElement(reactstrap_1.NavbarBrand, { tag: react_router_dom_1.Link, to: "/" }, "A to Z")),
                    React.createElement("ul", { className: "navbar-nav flex-grow" },
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/cart" },
                                React.createElement(reactstrap_1.Button, { color: "primary" },
                                    itemsInCart > 0 && (React.createElement(reactstrap_1.Badge, { color: "info" }, itemsInCart)),
                                    "View Cart",
                                    React.createElement("span", { className: "fas fa-cart-plus mx-1" })))))))));
    };
    return NavMenu;
}(React.PureComponent));
exports.default = react_redux_1.connect(function (state) {
    var itemsInCart = 0;
    if (state.cart && state.cart.cartItems.length) {
        itemsInCart = state.cart.cartItems.reduce(function (prev, curr) {
            return {
                product: curr.product,
                quantity: prev.quantity + curr.quantity,
            };
        }).quantity;
    }
    return {
        itemsInCart: itemsInCart,
    };
})(NavMenu);
//# sourceMappingURL=NavMenu.js.map