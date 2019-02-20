"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiUsers_1 = require("./users/apiUsers");
var logger_1 = require("./general/logger");
var bodyParser_1 = require("./general/bodyParser");
var apiTokenSignin_1 = require("./auth/apiTokenSignin");
var sessionVerify_1 = require("./auth/sessionVerify");
exports.routerV1 = express_1.Router();
exports.routerV1.use(logger_1.logger);
exports.routerV1.use(sessionVerify_1.apiSessionVerify);
exports.routerV1.use("/users", apiUsers_1.userRouter);
exports.routerV1.post("/tokensignin", bodyParser_1.urlEncodedParser, apiTokenSignin_1.apiTokenSignin);
