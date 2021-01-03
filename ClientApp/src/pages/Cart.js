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
var react_redux_1 = require("react-redux");
var reactstrap_1 = require("reactstrap");
var Cart_1 = require("../store/Cart");
var CartItem_1 = require("../components/CartItem");
var mapState = function (state) {
    return { cart: state.cart };
};
var mapDispatch = Cart_1.actionCreators;
var connector = react_redux_1.connect(mapState, mapDispatch);
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cart.prototype.validateOrder = function () {
        var cart = this.props.cart;
        if (cart) {
            if (cart.cartItems.length > 0) {
                console.log(this.props.cart);
                this.props.submitOrder(cart);
            }
        }
    };
    Cart.prototype.render = function () {
        var _this = this;
        var cart = this.props.cart;
        var cartItems = [];
        if (cart) {
            cartItems = cart.cartItems;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Jumbotron, { className: "mt-5" },
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, null, cartItems.length > 0 ? (cartItems.map(function (cartItem, cartItemIndex) {
                        return (React.createElement("div", { key: cartItem.product.id },
                            React.createElement(CartItem_1.default, { cartItem: cartItem, cartItemIndex: cartItemIndex })));
                    })) : (React.createElement("span", null, "Your Cart is currently Empty"))),
                    React.createElement(reactstrap_1.Col, { xs: { size: 2, offset: 1 } }, cartItems.length > 0 && (React.createElement(React.Fragment, null,
                        React.createElement("span", null,
                            "Order Total: $",
                            cart &&
                                cart.total.toFixed(2)),
                        ' ',
                        React.createElement("br", null),
                        React.createElement(reactstrap_1.Button, { color: "primary", onClick: function () { return _this.validateOrder(); } }, "Submit Order"))))))));
    };
    return Cart;
}(React.PureComponent));
exports.default = connector(Cart);
//# sourceMappingURL=Cart.js.map