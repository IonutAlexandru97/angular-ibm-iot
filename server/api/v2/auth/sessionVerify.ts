import { CustomRequestHandler } from "../../general/express"; 
import * as jwt from "jsonwebtoken";
import { sessionTokenSecret } from "../../../config";
import { APIError } from "../../general/messages";
import { db } from "../../../db/db";
import * as dbModel from "../../../db/model_generated";

export const apiSessionVerify: CustomRequestHandler = (req, res, next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, sessionTokenSecret, (err, decoded: any) =>{
            if(err){
                next(APIError.errUnauthorized());
            }
            else{
                const userdId = decoded.userdId;
                db.one("select * from users where id = ${userId}", {userId: userdId}).then((user: dbModel.users) => {
                    console.log(user);
                    req.user = user;
                    next();
                });
            }
        });
    }
    else{
        next();
    }
};