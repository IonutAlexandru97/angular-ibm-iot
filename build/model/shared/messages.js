"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var APIError = /** @class */ (function (_super) {
    __extends(APIError, _super);
    function APIError(name, message, status, properties, internalProperties) {
        var _this = _super.call(this) || this;
        _this.status = status;
        _this.properties = properties;
        _this.internalProperties = internalProperties;
        _this.name = name;
        _this.message = message;
        return _this;
    }
    APIError.prototype.publicVersion = function () {
        return new PublicError(this);
    };
    APIError.errNotFound = function (properties, internalProperties) {
        return new APIError("Resource not found", "The specified Resource does not exist", 404, properties, internalProperties);
    };
    APIError.errInvalidQueryParameter = function (properties, internalProperties) {
        return new APIError("Invalid Query Parameter", "One of the query parameters specified is invalid", 400, properties, internalProperties);
    };
    APIError.errMissingBody = function (properties, internalProperties) {
        return new APIError("Missing Body", "Missing Data in Request Body.", 400, properties, internalProperties);
    };
    APIError.errServerError = function (properties, internalProperties) {
        return new APIError("Internal Server Error", "Request could not be carried out.", 500, properties, internalProperties);
    };
    APIError.errUnauthorized = function (properties, internalProperties) {
        return new APIError("Unauthorized", "Client Authorization Failed", 401, properties, internalProperties);
    };
    return APIError;
}(Error));
exports.APIError = APIError;
var PublicError = /** @class */ (function () {
    function PublicError(err) {
        this.name = err.name;
        this.message = err.message;
        this.status = err.status;
        this.properties = err.properties;
    }
    return PublicError;
}());
exports.PublicError = PublicError;
var PublicInfo = /** @class */ (function () {
    function PublicInfo(message, status, properties) {
        this.message = message;
        this.status = status;
        this.properties = properties;
    }
    ;
    return PublicInfo;
}());
exports.PublicInfo = PublicInfo;
