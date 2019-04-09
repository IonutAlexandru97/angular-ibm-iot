import { CustomRequestHandler } from "../db/customRequestHandler";
import { db } from "../db/conf";
import { UserDetails } from '../model/userDetails';


export const apiGetUserDetails: CustomRequestHandler = (req, res, next) => {
    const userId = req.params.id;
    db.one("select * from users where id = ${id}", {id: userId}).then(selectedUser =>{
        res.json(new UserDetails(selectedUser));
    })
}