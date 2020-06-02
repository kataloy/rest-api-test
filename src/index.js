const express = require("express");
const bodyParser = require("body-parser");
const { auth, films, favorites, } = require('./services');

const app = express();
const port = 8080;

app.use(bodyParser.json());

auth(app);
films(app);
favorites(app);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = status >= 500 ? "Internal server error" : err.message;

    res.status(status);
    res.json({ error: message });

    console.error('123 error', err);
});

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})
