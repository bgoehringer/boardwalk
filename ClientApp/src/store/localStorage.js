"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCart = exports.loadCart = void 0;
var loadCart = function () {
    try {
        var stringifiedState = localStorage.getItem('cart');
        if (stringifiedState === null) {
            return undefined;
        }
        return JSON.parse(stringifiedState);
    }
    catch (err) {
        return undefined;
    }
};
exports.loadCart = loadCart;
var saveCart = function (cart) {
    try {
        var stringifiedState = JSON.stringify(cart);
        localStorage.setItem('cart', stringifiedState);
    }
    catch (err) {
    }
};
exports.saveCart = saveCart;
//# sourceMappingURL=localStorage.js.map