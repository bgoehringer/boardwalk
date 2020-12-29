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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreators = void 0;
// Define some types and consts for Type strings
// This helps avoid typo errors and type mismatches
// in the Type strings we use for the actionCreators and the reducer later.
// It also makes them much easier to update in the future if we need to add a prefix to avoid naming collisions with other actions
var REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
var RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
var CLEAR_SEARCH = 'CLEAR_SEARCH';
// ACTION CREATORS
exports.actionCreators = {
    requestProducts: function (searchTerm) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState &&
            appState.products &&
            searchTerm !== appState.products.searchTerm) {
            var searchParams = new URLSearchParams({ searchTerm: searchTerm });
            fetch("/api/product?" + searchParams)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({
                    type: RECEIVE_PRODUCTS,
                    searchTerm: searchTerm,
                    products: data,
                });
            });
            dispatch({ type: REQUEST_PRODUCTS, searchTerm: searchTerm });
        }
    }; },
    clearSearch: function () { return ({ type: CLEAR_SEARCH }); }
};
// REDUCER
var unloadedState = { products: [], searchTerm: null, isLoading: false };
var reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                products: state.products,
                searchTerm: action.searchTerm,
                isLoading: true,
            };
        case RECEIVE_PRODUCTS:
            return {
                products: action.products,
                searchTerm: action.searchTerm,
                isLoading: false,
            };
        case CLEAR_SEARCH:
            return __assign(__assign({}, state), { searchTerm: '' });
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=Products.js.map