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
import path from 'path'
import fs from 'fs';
import { ServerStyleSheet } from 'styled-components'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const app = express()

app.use(express.static("dist"))

const preloadedState = store.getState()

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.get("*", (req, res, next) => {

    const sheet = new ServerStyleSheet();
    const renderString = renderToString(sheet.collectStyles(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>)
    )
    const styles = sheet.getStyleTags();
    const html = fs.readFileSync('./template/index.html', 'utf8');


    const result = html
        .replace(`<div id="root"></div>`, `<div id="root">${renderString}</div>`)
        .replace('__DATA_FROM_SERVER__', `${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}`)
        .replace('__STYLE_STATE__', styles)

    res.send(result)

})

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
})