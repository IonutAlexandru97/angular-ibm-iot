"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonUsers = require("./users.json");
var DataStore = /** @class */ (function () {
    function DataStore() {
    }
    DataStore.users = jsonUsers;
    return DataStore;
}());
exports.DataStore = DataStore;
