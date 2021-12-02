import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import reducers from './shared/store/reducers';

const middlewares = [thunk];

const composeEnhancer = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(...middlewares)));

const render = (Comp) => {
    const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
    renderMethod(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>, document.getElementById('root'));
};

render();

reportWebVitals();
