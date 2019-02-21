import { RequestHandler } from "express";
import { APIError } from "../general/messages";

export const apiValidation: RequestHandler = (req, res, next) => {
    if(req.accepts("application/json")){
        next();
    }
    else{
        next(new APIError("Content Type not supported", "This API only supports application/json", 400));
    }
};