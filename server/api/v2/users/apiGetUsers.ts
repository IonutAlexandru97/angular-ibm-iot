import { RequestHandler } from "express";
import { db } from "../../../db/db";
import { users } from "../../../db/sql";
import * as dbModel from "../../../db/model_generated";
import { CustomRequestHandler } from "../../../model/express";
import { APIError } from "../../general/messages";


export const apiGetUsers: CustomRequestHandler = (req, res, next) =>{
   if(!req.user){
       next(APIError.errUnauthorized());
   }
    db.any('select * from users').then(function(data){
        res.status(200).json({
            status: 'success',
            data: data,
            messages: 'All users retrieved'
        });
    })
    .catch(function (err){
        return next(APIError.errNotFound);
    })
}
