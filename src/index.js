import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules";
import "./reset.css";
import rootSaga from "./sagas";
import "./style.css";
import { composeWithDevTools } from "redux-devtools-extension";



const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware)
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("root")
);
