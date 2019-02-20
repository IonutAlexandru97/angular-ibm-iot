"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var v4_1 = __importDefault(require("uuid/v4"));
var messages_1 = require("../../../model/shared/messages");
var db_1 = require("../../../db/db");
exports.apiAddUser = function (req, res, next) {
    if (!req.body) {
        next(messages_1.APIError.errMissingBody());
    }
    if (!req.user) {
        next(messages_1.APIError.errUnauthorized());
    }
    else {
        var newUser_1 = {
            id: v4_1.default(),
            email: req.body.email || "",
            family_name: req.body.family_name || "",
            given_name: req.body.given_name || ""
        };
        db_1.db.none(db_1.pgp.helpers.insert(newUser_1, undefined, "users")).then(function () {
            res.json(new messages_1.PublicInfo("User added", 200, { user: newUser_1 }));
        });
    }
};
