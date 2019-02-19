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
var express_1 = __importDefault(require("express"));
var v1_1 = require("./api/v1/v1");
var path = __importStar(require("path"));
var config_1 = require("./config");
var app = express_1.default();
app.disable("x-powered-by");
app.use("/v1", v1_1.routerV1);
app.get("/google_signin", function (req, res, next) {
    res.sendFile(path.join(config_1.__root, "google_signin.html"));
});
app.listen(process.env.PORT || 8081, function () {
    console.log("Server started at http://locahost:8081");
});
