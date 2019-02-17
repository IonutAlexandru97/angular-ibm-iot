"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
var staticFileService = __importStar(require("../general/static"));
exports.apiUploadeImages = function (req, res, next) {
    var userID = req.params.id;
    var userIndex = data_1.DataStore.users.findIndex(function (item) { return item.id == userID; });
    if (userIndex == -1) {
        res.json({ "status": "error", "message": "User not found" });
    }
    else {
        var upload = staticFileService.getFileUploader(req.app.get("env"));
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
                res.json({ "status": "error", "message": "File upload failed" });
            }
            else {
                data_1.DataStore.users[userIndex].img.push(req.file.filename);
            }
        });
    }
};
