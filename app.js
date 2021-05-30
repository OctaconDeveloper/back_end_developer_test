const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const router = require("./src/routes");
require("dotenv").config();
const config = require("./src/env");

// helperFunctions
const app = express();
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(hpp());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`/${config().API_VERSION}`, router);
app.use(`/${config().API_VERSION}`, (req, res) => {
  res.json({ status: 200, health: "api online" });
});
app.use("/", (req, res) => {
  res.json({ status: 200, health: "working" });
});

try {
    app.listen(config().PORT, () => {
      console.log(
        `${config().APP_NAME} running on http://localhost:${config().PORT}`
      );
    });
  } catch (err) {
    console.error(err);
  }

module.exports = app;
