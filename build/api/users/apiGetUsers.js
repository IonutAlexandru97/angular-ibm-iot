"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
var usersDetail_1 = require("../../model/shared/usersDetail");
exports.apiGetUsers = function (req, res, next) {
    res.json(data_1.DataStore.users.map(function (item) { return new usersDetail_1.usersDetail(item); }));
};
