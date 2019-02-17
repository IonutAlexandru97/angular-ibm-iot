"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersDetail = /** @class */ (function () {
    function usersDetail(data, userImage) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.email = data.username;
        this.img = userImage;
    }
    return usersDetail;
}());
exports.usersDetail = usersDetail;
