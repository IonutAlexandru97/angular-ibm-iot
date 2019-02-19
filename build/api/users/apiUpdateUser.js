"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
exports.apiUpdateUsers = function (req, res, next) {
    var userID = req.params.id;
    var userIndex = data_1.DataStore.users.findIndex(function (item) { return item.id == userID; });
    if (userIndex > -1) {
        var newUser = {
            id: userID,
            name: req.body.name || "",
            username: req.body.username || "",
            email: req.body.email || "",
            password: req.body.password || "",
            role: req.body.role || "",
            img: req.body.img || ""
        };
        data_1.DataStore.users[userIndex] = newUser;
        res.json({ "status": "success", "message": "Element updated" });
    }
    else {
        res.json({ "status": "error", "message": "Element not found" });
    }
};
