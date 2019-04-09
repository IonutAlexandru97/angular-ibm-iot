import { CustomRequestHandler } from '../db/customRequestHandler';
import { db, pgp } from '../db/conf';
import * as model from '../model/users';

export const apiGetUsers: CustomRequestHandler = (req, res, next) => {
    const sqlSearch = "select * from users";
    db.any(sqlSearch).then((users: model.users[]) => {
        res.json(users);
    })
}