import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadCart, saveCart } from './store/localStorage'


// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });


// Attempt to load the contents of a locally saved cart if possible
const savedCart = loadCart()

// Get the application-wide store instance, prepopulating with the locally saved cart if possible
const store = configureStore(history, savedCart);


// Create a listener that will save the cart locally every time it is updated
store.subscribe(() => {
    saveCart({ cart: store.getState().cart })
})

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
