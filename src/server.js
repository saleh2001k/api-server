"use strict";

const express = require("express");
const cors = require("cors");
const pageNotFound = require("./error-handlers/404");
const serverError = require("./error-handlers/500");
const foodRouter = require("./routes/food");
const clothesRouter = require("./routes/clothes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(foodRouter);
app.use(clothesRouter);

function start(port) {
  app.listen(port, () => console.log(`Server is running on port: ${port}`));
}
app.use(pageNotFound);
app.use(serverError);

module.exports = {
  start,
  app,
};
