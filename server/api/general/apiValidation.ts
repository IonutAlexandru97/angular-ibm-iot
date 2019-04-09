import { RequestHandler } from "express";

export const apiValidation: RequestHandler = (req, res, next) =>{
    if(req.accepts("application/json")){
        next();
    }
    else {
        res.json("API ERROR CONTENT");
    }
};