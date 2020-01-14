import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/modules";
import rootSaga from "../src/sagas";
import App from "../src/App"

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
                <App />
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
            <title>도서대여 프로젝트</title>
            </head>
            <body>
            <script>
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
