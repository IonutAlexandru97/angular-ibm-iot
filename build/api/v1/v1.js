"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiUsers_1 = require("./users/apiUsers");
var logger_1 = require("./general/logger");
exports.routerV1 = express_1.Router();
exports.routerV1.use(logger_1.logger);
exports.routerV1.use("/users", apiUsers_1.userRouter);
