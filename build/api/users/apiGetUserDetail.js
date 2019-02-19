"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
var usersDetails_1 = require("../../model/shared/usersDetails");
exports.apiGetUsersDetails = function (req, res, next) {
    var userID = req.params.id;
    var selectedUser = data_1.DataStore.users.find(function (element) { return element.id == userID; });
    if (selectedUser) {
        var imageURLs_1 = selectedUser.img;
        res.json(data_1.DataStore.users.map(function (item) { return new usersDetails_1.usersDetail(item, imageURLs_1); }));
    }
    else {
        res.json({ "status": "failed", "message": "User not found" });
    }
};
