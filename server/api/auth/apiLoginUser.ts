import * as bcrypt from "bcrypt-nodejs";
import * as model from "../model/users"
import { db, pgp } from "../db/conf"
import { CustomRequestHandler } from "../db/customRequestHandler";
import { apiSessionGenerate } from "./apiSessionGenerate";


export const apiLoginUser: CustomRequestHandler = (req, res, next) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    
    db.one("select * from users where email = ${email}", {email: userEmail}).then((user: model.users) => {
            bcrypt.compare(userPassword, user.password, function(err, ress){
                if(!ress){
                    res.status(401).json("Invalid password!");
                }else{
                    req.users = user;
                    apiSessionGenerate(req, res, next);
                }
            })
    }).catch(err => {
        if(err.code == pgp.errors.queryResultErrorCode.noData){
            res.status(401).json("Invalid e-mail!");
        }
    })
    
}