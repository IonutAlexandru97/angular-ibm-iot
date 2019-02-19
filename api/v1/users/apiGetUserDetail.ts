import { RequestHandler } from "express";
import { usersDetail } from "../../../model/shared/usersDetails";
import { db } from "../../../db/db";


export const apiGetUsersDetails: RequestHandler = (req, res, next) => {
    const userID = req.params.id;
    db.one("select * from users where id = $1", [userID]).then(selectedUser => {
        if(selectedUser) {
            const imageURLs = selectedUser.img;
            res.json( new usersDetail(selectedUser, imageURLs));
        }else{
            res.json({"status": "failed", "message": "User not found" });
        }
    });
    
};