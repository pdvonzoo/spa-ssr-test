import React from "react";
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/modules";
import rootSaga from "../src/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware)
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

hydrate(
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById("root")
);
