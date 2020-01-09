const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});