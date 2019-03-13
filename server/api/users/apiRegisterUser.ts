import { CustomRequestHandler } from "../../db/customRequestHandler";
import uuid = require("uuid");
import { setPassword } from "../auth/Encryption";
import { db, pgp } from "../../db/conf";
import * as model from '../../model/users';
import { apiSessionGenerate } from "../auth/sessionGenerate";

export const apiRegisterUser: CustomRequestHandler = (req, res, next) => {
    const newUser: model.users = {
        id: uuid(),
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }
   newUser.password = setPassword(newUser.password);
   db.none(pgp.helpers.insert(newUser, undefined, "users")).then(() => {
       req.users = newUser;
       apiSessionGenerate(req, res, next);
   }) 
};