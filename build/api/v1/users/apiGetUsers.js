"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersDetails_1 = require("../../../model/shared/usersDetails");
var db_1 = require("../../../db/db");
exports.apiGetUsers = function (req, res, next) {
    db_1.db.any("select * from users").then(function (users) {
        res.json(users.map(function (item, image) { return new usersDetails_1.usersDetail(item, image); }));
    });
};
