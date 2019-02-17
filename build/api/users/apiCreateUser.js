"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var v4_1 = __importDefault(require("uuid/v4"));
var data_1 = require("../../data/data");
exports.apiCreateUsers = function (req, res, next) {
    var newUser = {
        id: v4_1.default(),
        name: req.body.name || "",
        username: req.body.username || "",
        email: req.body.email || "",
        password: req.body.password || "",
        role: req.body.role || "",
        img: []
    };
    data_1.DataStore.users.push(newUser);
    res.send("New user created");
};
