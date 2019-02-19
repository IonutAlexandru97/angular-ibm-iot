import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../../data/data";
import { APIError, PublicInfo } from "../../../model/shared/messages";

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

    DataStore.users.push(newUser);
    res.json(new PublicInfo("User added", 200, {user: newUser}));
};