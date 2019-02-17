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
var app = express_1.default();
var apiGetUsers_1 = require("./api/users/apiGetUsers");
var apiGetUsersDetail_1 = require("./api/users/apiGetUsersDetail");
var apiCreateUser_1 = require("./api/users/apiCreateUser");
var apiDeleteUsers_1 = require("./api/users/apiDeleteUsers");
var apiUpdateUsers_1 = require("./api/users/apiUpdateUsers");
var bodyParser = __importStar(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var apiUploadImges_1 = require("./api/users/apiUploadImges");
var logger = morgan_1.default("dev");
var jsonParser = bodyParser.json();
app.use(logger);
app.get("/", function (req, res, next) {
    res.send("Homepage Route");
});
app.get("/users", logger, apiGetUsers_1.apiGetUsers);
app.get("/users/:id", apiGetUsersDetail_1.apiGetUsersDetails);
app.post("/users", jsonParser, apiCreateUser_1.apiCreateUsers);
app.post("/users/:id/img", apiUploadImges_1.apiUploadeImages);
app.delete("/users/:id", apiDeleteUsers_1.apiDeleteUsers);
app.put("/users/:id", jsonParser, apiUpdateUsers_1.apiUpdateUsers);
app.listen(process.env.PORT || 8080, function () {
    console.log("Server started....");
});
