import React from "react";
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/modules";
import rootSaga from "../src/sagas";
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    // applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

hydrate(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
