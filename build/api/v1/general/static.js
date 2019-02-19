"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path = __importStar(require("path"));
var config_1 = require("../../../config");
var uuid = require("uuid");
function getStaticHome(env) {
    switch (env) {
        case "development":
            return "http://localhost:8080/v1/static/";
        case "production":
        //......
    }
}
exports.getStaticHome = getStaticHome;
function fileMapper(env) {
    return function (filename) { return getStaticHome(env) + filename; };
}
exports.fileMapper = fileMapper;
function getFileUploader(env) {
    switch (env) {
        case "development":
            var fileID_1 = uuid();
            var fileStore = multer_1.default.diskStorage({
                destination: function (req, file, callback) {
                    callback(null, path.join(config_1.__root, "public", "img"));
                },
                filename: function (req, file, callback) {
                    callback(null, fileID_1 + path.extname(file.originalname));
                }
            });
            return multer_1.default({ storage: fileStore }).single("file");
        // case "production"    
        default:
            return function (req, res, next) { return next(); };
    }
}
exports.getFileUploader = getFileUploader;
