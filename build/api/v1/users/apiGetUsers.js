"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../../data/data");
var usersDetails_1 = require("../../../model/shared/usersDetails");
exports.apiGetUsers = function (req, res, next) {
    res.json(data_1.DataStore.users.map(function (item, image) { return new usersDetails_1.usersDetail(item, image); }));
};
