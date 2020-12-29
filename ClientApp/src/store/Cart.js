"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreators = void 0;
// Define some types and consts for Type strings
// This helps avoid typo errors and type mismatches
// in the Type strings we use for the actionCreators and the reducer later.
// It also makes them much easier to update in the future if we need to add a prefix to avoid naming collisions with other actions
var ADD_TO_CART = 'ADD_TO_CART';
var REMOVE_FROM_CART = 'REMOVE_FROM_CART';
var ADJUST_QUANTITY = 'ADJUST_QUANTITY';
var SUBMIT_ORDER = 'SUBMIT_ORDER';
// ACTION CREATORS
exports.actionCreators = {
    addToCart: function (product, quantity) {
        return ({ type: ADD_TO_CART, product: product, quantity: quantity });
    },
    removeFromCart: function (cartIndex) {
        return ({ type: REMOVE_FROM_CART, cartIndex: cartIndex });
    },
    adjustQuantity: function (cartIndex, newQuantity) {
        return ({
            type: ADJUST_QUANTITY,
            cartIndex: cartIndex,
            newQuantity: newQuantity,
        });
    },
    submitOrder: function (cart) { return function (dispatch) {
        fetch('/api/order', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(cart),
        }).then(function (response) {
            if (response.status === 201) {
                dispatch({ type: SUBMIT_ORDER });
            }
            else {
                return;
            }
        });
    }; },
};
function calculateTotalPrice(cartItems) {
    var totalPrice = 0;
    for (var _i = 0, cartItems_1 = cartItems; _i < cartItems_1.length; _i++) {
        var cartItem = cartItems_1[_i];
        var itemQuantity = isNaN(cartItem.quantity) ? 0 : cartItem.quantity;
        totalPrice += cartItem.product.price * itemQuantity;
    }
    return totalPrice;
}
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var reducer = function (state, incomingAction) {
    var cartItems = [];
    if (state === undefined) {
        return { cartItems: cartItems, total: 0 };
    }
    var action = incomingAction;
    switch (action.type) {
        // Don't need to check if the item is already in the cart here
        // That should be done before we get to this point
        case ADD_TO_CART:
            cartItems = __spreadArrays(state.cartItems, [
                { product: action.product, quantity: action.quantity },
            ]);
            return { cartItems: cartItems, total: calculateTotalPrice(cartItems) };
        case REMOVE_FROM_CART:
            cartItems = __spreadArrays(state.cartItems.slice(0, action.cartIndex), state.cartItems.slice(action.cartIndex + 1));
            return { cartItems: cartItems, total: calculateTotalPrice(cartItems) };
        case ADJUST_QUANTITY:
            cartItems = __spreadArrays(state.cartItems.slice(0, action.cartIndex), [
                __assign(__assign({}, state.cartItems[action.cartIndex]), { quantity: action.newQuantity })
            ], state.cartItems.slice(action.cartIndex + 1));
            return { cartItems: cartItems, total: calculateTotalPrice(cartItems) };
        case SUBMIT_ORDER:
            return { cartItems: [], total: 0 };
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=Cart.js.map