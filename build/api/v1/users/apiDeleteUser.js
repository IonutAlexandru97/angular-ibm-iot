"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../../data/data");
var messages_1 = require("../../../model/shared/messages");
exports.apiDeleteUsers = function (req, res, next) {
    var userID = req.params.id;
    var userIndex = data_1.DataStore.users.findIndex(function (item) { return item.id == userID; });
    if (userIndex > -1) {
        data_1.DataStore.users.splice(userIndex);
        res.json(new messages_1.PublicInfo("User deleted", 200));
    }
    else {
        next(new messages_1.APIError("Validation Error", "User not found", 400));
    }
};
