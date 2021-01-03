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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var Cart_1 = require("../store/Cart");
var reactstrap_1 = require("reactstrap");
var mapState = function (state, ownProps) {
    return {
        cart: state.cart,
        product: ownProps.product,
    };
};
var mapDispatch = Cart_1.actionCreators;
var connector = react_redux_1.connect(mapState, mapDispatch);
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            quantity: 1,
            error: '',
        };
        return _this;
    }
    Product.prototype.isQuantityNegative = function (quantity) {
        var error = typeof quantity !== 'number' || quantity <= 0
            ? 'Quantity must be greater than 0'
            : '';
        this.setState({
            quantity: quantity,
            error: error,
        });
    };
    Product.prototype.itemIsAlreadyInCart = function (productId) {
        var cart = this.props.cart;
        if (!cart)
            return;
        var cartIndex = cart.cartItems.findIndex(function (cartItem) {
            return cartItem.product.id === productId;
        });
        if (cartIndex > -1) {
            return true;
        }
        return false;
    };
    Product.prototype.addToCart = function (product, quantity) {
        if (this.state.error)
            return; // If there is already an active error we can return immediately
        if (this.itemIsAlreadyInCart(product.id)) {
            this.setState(__assign(__assign({}, this.state), { error: 'This item is already in your cart' }));
            return;
        }
        this.props.addToCart(product, quantity);
    };
    Product.prototype.render = function () {
        var _this = this;
        var product = this.props.product;
        var name = product.name, description = product.description, price = product.price, imageUrl = product.imageUrl;
        var _a = this.state, quantity = _a.quantity, error = _a.error;
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Card, { className: "h-100" },
                React.createElement(reactstrap_1.CardImg, { top: true, width: "300px", height: "200px", src: "https://localhost:5001/images/" + imageUrl, alt: name }),
                React.createElement(reactstrap_1.CardBody, null,
                    React.createElement(reactstrap_1.CardTitle, { tag: "h5" }, name),
                    React.createElement(reactstrap_1.CardText, null, description),
                    React.createElement(reactstrap_1.CardSubtitle, null, price.toFixed(2))),
                React.createElement(reactstrap_1.CardBody, null,
                    React.createElement(reactstrap_1.Row, null,
                        React.createElement(reactstrap_1.Col, { xs: { size: 6 } },
                            React.createElement(reactstrap_1.InputGroup, null,
                                React.createElement(reactstrap_1.InputGroupAddon, { addonType: "prepend" }, "Quantity"),
                                React.createElement(reactstrap_1.Input, { type: "text", pattern: "[0-9]+", defaultValue: "1", onInput: function (event) {
                                        return _this.isQuantityNegative(parseInt(event.currentTarget.value));
                                    } }))),
                        React.createElement(reactstrap_1.Col, { xs: { size: 5, offset: 1 }, className: "right-align" },
                            React.createElement(reactstrap_1.Button, { color: "primary", onClick: function () {
                                    return _this.addToCart(product, quantity);
                                } }, "Add to Cart"))),
                    error && (React.createElement(reactstrap_1.Alert, { color: "danger", className: "mt-2 mb-0" }, error))))));
    };
    return Product;
}(React.PureComponent));
exports.Product = Product;
exports.default = connector(Product);
//# sourceMappingURL=Product.js.map