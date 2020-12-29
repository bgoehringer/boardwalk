"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.css");
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var connected_react_router_1 = require("connected-react-router");
var history_1 = require("history");
var configureStore_1 = require("./store/configureStore");
var App_1 = require("./App");
var registerServiceWorker_1 = require("./registerServiceWorker");
var localStorage_1 = require("./store/localStorage");
// Create browser history to use in the Redux store
var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var history = history_1.createBrowserHistory({ basename: baseUrl });
// Attempt to load the contents of a locally saved cart if possible
var savedCart = localStorage_1.loadCart();
// Get the application-wide store instance, prepopulating with the locally saved cart if possible
var store = configureStore_1.default(history, savedCart);
// Create a listener that will save the cart locally every time it is updated
store.subscribe(function () {
    localStorage_1.saveCart({ cart: store.getState().cart });
});
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(connected_react_router_1.ConnectedRouter, { history: history },
        React.createElement(App_1.default, null))), document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map