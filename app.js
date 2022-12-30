// the default requirements similar to libraries used with python

const express = require('express') //same as "from flask import Flask"
const app = express();
const itemsRoutes = require("./routes/items") //similar to render_templates
const ExpressError = require("./expressError")

app.use(express.json());
app.use("/items", itemsRoutes);

/**404 error handler */

app.use((req, res, next) => {
    return new ExpressError("Not Found", 404);
});

/** general error handler */

app.use((err, req, res, next) => {
    res.status(err.satus || 500);

    return res.json({error: err.message,});
});

module.exports = app