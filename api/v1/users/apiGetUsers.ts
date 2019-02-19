import { RequestHandler } from "express";
import { usersDetail } from "../../../model/shared/usersDetails";
import { db } from "../../../db/db";

export const apiGetUsers: RequestHandler = (req, res, next) => {
    db.any("select * from users").then(users => {
        res.json(users.map((item: any, image: any) => new usersDetail(item, image)));
    });
    
};