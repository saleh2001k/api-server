const express = require("express");
const foodRouter = require("./routes/food");
const clothesRouter = require("./routes/clothes");
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const app = express();

app.use(express.json());

app.use("/food", foodRouter);
app.use("/clothes", clothesRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
