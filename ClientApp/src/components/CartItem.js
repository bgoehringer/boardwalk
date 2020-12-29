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
var Cart_1 = require("../store/Cart");
var reactstrap_1 = require("reactstrap");
var CartItem = /** @class */ (function (_super) {
    __extends(CartItem, _super);
    function CartItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartItem.prototype.adjustQuantity = function (quantity, storeItemIndex) {
        var error = quantity <= 0 ? 'Quantity must be greater than 0' : '';
        if (!error) {
            this.props.adjustQuantity(storeItemIndex, quantity);
        }
    };
    CartItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.cartItem, product = _b.product, quantity = _b.quantity, cartItemIndex = _a.cartItemIndex;
        var name = product.name, description = product.description, price = product.price, imageUrl = product.imageUrl;
        var itemQuantity = isNaN(quantity) ? 0 : quantity;
        var subTotal = price * itemQuantity;
        return (React.createElement(React.Fragment, null, product && (React.createElement(reactstrap_1.Row, { className: "cart-item", key: product.id },
            React.createElement(reactstrap_1.Col, { xs: "4" },
                React.createElement(reactstrap_1.CardImg, { top: true, width: "300px", height: "150px", src: "https://localhost:5001/images/" + imageUrl, alt: name })),
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, null,
                        React.createElement("h5", null, name),
                        React.createElement("p", null, description),
                        React.createElement("p", null,
                            "$",
                            price.toFixed(2))),
                    React.createElement(reactstrap_1.Col, { xs: "3" },
                        React.createElement(reactstrap_1.Button, { onClick: function () {
                                return _this.props.removeFromCart(cartItemIndex);
                            } }, "Remove from Cart"),
                        React.createElement("br", null))),
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, { xs: "4" },
                        React.createElement(reactstrap_1.InputGroup, null,
                            React.createElement(reactstrap_1.InputGroupAddon, { addonType: "prepend" }, "Quantity"),
                            React.createElement(reactstrap_1.Input, { type: "text", pattern: "[0-9]+", defaultValue: itemQuantity, onInput: function (event) {
                                    return _this.adjustQuantity(parseInt(event.currentTarget
                                        .value), cartItemIndex);
                                } }))),
                    React.createElement(reactstrap_1.Col, { xs: { size: 3, offset: 5 } },
                        "Item Total: $",
                        subTotal.toFixed(2))))))));
    };
    return CartItem;
}(React.PureComponent));
exports.default = react_redux_1.connect(null, Cart_1.actionCreators)(CartItem);
//# sourceMappingURL=CartItem.js.map