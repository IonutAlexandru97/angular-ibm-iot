"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersDetails_1 = require("../../../model/shared/usersDetails");
var db_1 = require("../../../db/db");
exports.apiGetUsersDetails = function (req, res, next) {
    var userID = req.params.id;
    db_1.db.one("select * from users where id = $1", [userID]).then(function (selectedUser) {
        if (selectedUser) {
            var imageURLs = selectedUser.img;
            res.json(new usersDetails_1.usersDetail(selectedUser, imageURLs));
        }
        else {
            res.json({ "status": "failed", "message": "User not found" });
        }
    });
};
