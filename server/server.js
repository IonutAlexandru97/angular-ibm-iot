"use strict";
exports.__esModule = true;
var express = require("express");
var v1_1 = require("./api/v1");
var port = 3000;
var app = express();
app.disable("X-powered-by");
app.use("/v1", v1_1.routerV1);
app.listen(process.env.PORT || port, function () { return console.log("Server started at http://localhost:" + port); });
