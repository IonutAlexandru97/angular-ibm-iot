import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { APIError, PublicInfo } from "../../../model/shared/messages";
import { db, pgp } from "../../../db/db";

export const apiAddUser: RequestHandler = (req, res, next) => {
    if(!req.body){
        next(new APIError("Data missing", "No Data in Request Body.", 400))
    }
    const newUser = {
        id: uuid(),
        name: req.body.name || "",
        username: req.body.username || "",
        email: req.body.email || "",
        password: req.body.password || "",
        role: req.body.role || "",
        img: []
    }
    db.none(pgp.helpers.insert(newUser, undefined, "users")).then(() => {
        res.json(new PublicInfo("User added", 200, {user: newUser}));
    })
    
};