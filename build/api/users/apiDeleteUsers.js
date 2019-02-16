"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
exports.apiDeleteUsers = function (req, res, next) {
    var tourID = req.params.id;
    var userIndex = data_1.DataStore.users.findIndex(function (item) { return item.id == tourID; });
    if (userIndex > -1) {
        data_1.DataStore.users.splice(userIndex);
        res.json({ "status": "success", "message": "Element removed" });
    }
    else {
        res.json({ "status": "error", "message": "Element not found" });
    }
};
