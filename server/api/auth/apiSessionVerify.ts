import * as jwt from "jsonwebtoken";
import { CustomRequestHandler } from "../db/customRequestHandler";
import { sessionTokenSecret, db } from "../db/conf";
import { APIError } from "../general/messages";
import * as dbModel from "../model/users";

export const apiSessionVerify: CustomRequestHandler = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, sessionTokenSecret, (err, decoded: any) => {
            if (err) {
                next(APIError.errUnauthorized());
            }
            else {
                const userId = decoded.userId;
                db.one("select * from users where id = ${userId}", {userId: userId}).then((user: dbModel.users) => {
                    console.log(user);
                    req.users = user;
                    next();
                });
            }
        });
    }
    else {
        next();
    }
};