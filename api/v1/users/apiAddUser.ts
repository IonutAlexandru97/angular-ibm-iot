import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { APIError, PublicInfo } from "../../../model/shared/messages";
import { db, pgp } from "../../../db/db";
import { CustomRequestHandler } from "../../../model/express";

export const apiAddUser: CustomRequestHandler = (req, res, next) => {
    if(!req.body){
        next(APIError.errMissingBody());
    }
    if(!req.user){
        next(APIError.errUnauthorized());
    }else{
    const newUser = {
        id: uuid(),
        email: req.body.email || "",
        family_name: req.body.family_name || "",
        given_name: req.body.given_name || ""
    }
    db.none(pgp.helpers.insert(newUser, undefined, "users")).then(() => {
        res.json(new PublicInfo("User added", 200, {user: newUser}));
    })
}
    
};