import { CustomRequestHandler } from "../../db/customRequestHandler";
import { db } from "../../db/conf";
import { UserSummary } from "../../model/userSummary";

export const apiGetUserDetails: CustomRequestHandler = (req, res, next) => {
    const userId = req.params.id;
    db.one("select * from users where id = ${id}", {id: userId}).then(selectedUser => {
        res.json(new UserSummary(selectedUser));
    });
}