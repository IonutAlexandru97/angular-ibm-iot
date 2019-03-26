import { CustomRequestHandler } from "../../db/customRequestHandler";
import * as jwt from 'jsonwebtoken';
import { secret } from "../general/config";
import { db } from "../../db/conf";
import * as model from "../../model/users";

export const apiSessionVerify: CustomRequestHandler = (req, res, next) => {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, secret, (err, decoded: any) => {
            if(err){
                return res.status(401).send('Unauthorized request')
            }else{
                const userId = decoded.userId;
                db.one("select * from users where id = ${userId}", {userId: userId}).then((user: model.users) =>{
                    req.users = user;
                    next();
                })
            }
        })
    }else{
        next();
    }
}