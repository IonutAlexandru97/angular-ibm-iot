"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiGetUserDetail_1 = require("./apiGetUserDetail");
var apiAddUser_1 = require("./apiAddUser");
var apiDeleteUser_1 = require("./apiDeleteUser");
var apiUpdateUser_1 = require("./apiUpdateUser");
var bodyParser_1 = require("../general/bodyParser");
var apiGetUsers_1 = require("./apiGetUsers");
exports.userRouter = express_1.Router();
exports.userRouter.route("/")
    .get(apiGetUsers_1.apiGetUsers)
    .post(bodyParser_1.jsonParser, apiAddUser_1.apiAddUser);
exports.userRouter.route("/:id")
    .get(apiGetUserDetail_1.apiGetUsersDetails)
    .delete(apiDeleteUser_1.apiDeleteUsers)
    .patch(apiUpdateUser_1.apiUpdateUsers);
