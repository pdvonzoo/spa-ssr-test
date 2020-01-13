// import express from "express";
// import React from "react";
// import { renderToNodeStream } from "react-dom/server";
// import { ServerLocation } from "@reach/router";
// import fs from "fs";
// import App from "../src/App";


// import { Provider } from "react-redux";
// import createSagaMiddleware from "redux-saga";
// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../src/modules";
// import rootSaga from "../src/sagas";
// import { StaticRouter } from 'react-router-dom';


// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//     rootReducer,
//     // composeWithDevTools(applyMiddleware)
//     applyMiddleware(sagaMiddleware)
// );
// sagaMiddleware.run(rootSaga);

// const PORT = process.env.PORT || 3000;

// const html = fs.readFileSync("dist/index.html").toString();

// const parts = html.split("not rendered");

// const app = express();

// app.use("/dist", express.static("dist"));
// app.use((req, res) => {
//     res.write(parts[0]);
//     const reactMarkup = (
//         <Provider store={store}>
//             <StaticRouter location={req.url}>
//                 <App />
//             </StaticRouter>
//         </Provider>
//     );

//     const stream = renderToNodeStream(reactMarkup);
//     stream.pipe(
//         res,
//         { end: false }
//     );
//     stream.on("end", () => {
//         res.write(parts[1]);
//         res.end();
//     });
// });

// console.log(`listening on ${PORT}`);
// app.listen(PORT);


// // import express from "express";
// // import path from "path";
// // const app = express();

// // import React from "react";
// // import { Provider } from "react-redux";
// // import createSagaMiddleware from "redux-saga";
// // import { createStore, applyMiddleware } from "redux";
// // import rootReducer from "../src/modules";
// // import rootSaga from "../src/sagas";

// // import { composeWithDevTools } from "redux-devtools-extension";
// // import { renderToNodeStream } from "react-dom/server";
// // import { StaticRouter } from 'react-router-dom';
// // import fs from "fs";
// // import App from "../src/App";


// // const html = fs.readFileSync("dist/index.html").toString();
// // const parts = html.split("not rendered");


// // const sagaMiddleware = createSagaMiddleware();
// // const store = createStore(
// //     rootReducer,
// //     // composeWithDevTools(applyMiddleware)
// //     applyMiddleware(sagaMiddleware)
// // );
// // sagaMiddleware.run(rootSaga);


// // app.use(express.static(path.join(__dirname, "dist")));
// // // app.get("*", function (req, res) {
// // //     res.sendFile(path.join(__dirname, "dist", "index.html"), function (err) {
// // //         if (err) {
// // //             res.status(500).send(err)
// // //         }
// // //     });
// // // });

// // // app.use((req, res) => {
// // app.get('*', function (req, res, next) {

// //     res.write(parts[0]);
// //     const stream = renderToNodeStream(
// //         <Provider store={store}>
// //             <StaticRouter location={req.url}>
// //                 <App />
// //             </StaticRouter>
// //         </Provider>
// //     );
// //     stream.pipe(
// //         res,
// //         { end: false }
// //     );
// //     stream.on("end", () => {
// //         res.write(parts[1]);
// //         res.end();
// //     });
// // });

// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //     console.log(`App is running on port ${PORT}`);
// // });




import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import App from '../src/App'
import Routes from "../src/Routes"

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/modules";
import rootSaga from "../src/sagas";
import { readFileSync } from "fs"

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

window.__PRELOADED_STATE__ = NONE;
NONE.replace()