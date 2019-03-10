import { CustomRequestHandler } from "../../db/customRequestHandler";
import { db, pgp } from "../../db/conf";
import * as model from "../../model/users";
import * as bcrypt from "bcrypt-nodejs";


export const apiLoginUser: CustomRequestHandler = (req, res, next) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    
    db.one("select * from users where email = ${email}", {email: userEmail}).then((user: model.users) => {
            bcrypt.compare(userPassword, user.password, function(err, ress){
                if(!ress){
                    res.status(401).json("Invalid password!");
                }else{
                    res.status(200).json("Successfully Login!");
                }
            })
    }).catch(err => {
        if(err.code == pgp.errors.queryResultErrorCode.noData){
            res.status(401).json("Invalid e-mail!");
        }
    })
    
}