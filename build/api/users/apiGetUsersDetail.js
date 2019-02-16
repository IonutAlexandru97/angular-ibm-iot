"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
var usersDetail_1 = require("../../model/shared/usersDetail");
exports.apiGetUsersDetails = function (req, res, next) {
    var userID = req.params.id;
    var selectedUser = data_1.DataStore.users.find(function (element) { return element.id == userID; });
    if (selectedUser) {
        res.json(data_1.DataStore.users.map(function (item) { return new usersDetail_1.usersDetail(item); }));
    }
    else {
        res.json({ "status": "failed", "message": "User not found" });
    }
};
