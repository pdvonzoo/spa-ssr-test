const express = require("express");
const path = require("path");
const app = express();

const React = require("react");
const { StaticRouter } = require('react-router-dom');
const ReactDOMServer = require('react-dom/server')
const fs = require("fs");
const App = require("../src/index");


const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered");


app.use(express.static(path.join(__dirname, "dist")));
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "dist", "index.html"), function (err) {
//         if (err) {
//             res.status(500).send(err)
//         }
//     });
// });

app.use((req, res) => {
    res.write(parts[0]);

    const stream = ReactDOMServer.renderToNodeStream(
        <StaticRouter url={req.url}>
            <App />
        </StaticRouter>
    );
    stream.pipe(
        res,
        { end: false }
    );
    stream.on("end", () => {
        res.write(parts[1]);
        res.end();
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});