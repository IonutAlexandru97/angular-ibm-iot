import { CustomRequestHandler } from "../db/customRequestHandler";
import * as model from '../model/users';
import uuid = require("uuid");
import * as bcrypt from "bcrypt-nodejs";
import { db, pgp } from '../db/conf';

export const apiRegisterUser: CustomRequestHandler = (req, res, next) =>{
    const newUser: model.users = {
        id: uuid(),
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }

    newUser.password = setPassword(newUser.password);
    db.one(pgp.helpers.insert(newUser, undefined, "users")).then(() =>{
        res.json("User added to database!");
    }).catch(err => {
        if(err.code == pgp.errors.queryResultErrorCode.noData){
            res.status(401).json("Invalid query!");
        }
    });
}

function setPassword(password: string){
    var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return hash;
}