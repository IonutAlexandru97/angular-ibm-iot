import { RequestHandler } from "express";
import { OAuth2Client } from "google-auth-library";
import { TokenPayload } from "google-auth-library/build/src/auth/loginticket";
import * as dbModel from "../../../db/model_generated";
import { db, pgp } from "../../../db/db";
import uuid = require("uuid");
const CLIENT_ID = "64115302209-32dsqmtnkidb10t1d6nku9j95arqev5v.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

export const apiTokenSignin: RequestHandler = (req, res, next) => {
    client.verifyIdToken({
        idToken: req.body.idtoken,
        audience: CLIENT_ID
    }).then(ticket => {
        const payload = ticket!.getPayload() as TokenPayload;
        const email = payload.email as string;
        db.one("select * from users where email = ${email}", {email: email}).then((user: dbModel.users) => {
           res.json(user);
           //Generate Session Token 
        })
        .catch(err => {
            if(err.code == pgp.errors.queryResultErrorCode.noData){
                // Create User
                const user: dbModel.users = {
                    id: uuid(),
                    email: email,
                    family_name: payload.family_name || null,
                    given_name: payload.given_name || null
                }
                db.none(pgp.helpers.insert(user, undefined, "users")).then(() => {
                    res.json(user);
                    //Generate Session Token
                })
            }
        })
    });
};