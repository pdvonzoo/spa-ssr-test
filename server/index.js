import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import Routes from "../src/Routes"

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/modules";
import rootSaga from "../src/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const app = express()

app.use(express.static("dist"))

app.get("*", (req, res, next) => {
    const markup = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <Routes />
            </StaticRouter>
        </Provider>
    )

    const preloadedState = store.getState()

    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>SSR with RR</title>
            </head>
            <body>
            <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // https://redux.js.org/recipes/server-rendering/#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
            <div id="root">${markup}</div>
            <script src="/bundle.js"></script>
            </body>
        </html>
        `)
})

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
})
