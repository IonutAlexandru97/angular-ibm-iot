import { CustomRequestHandler } from "../../db/customRequestHandler";
import * as jwt from "jsonwebtoken";

export const apiSessionGenerate: CustomRequestHandler = (req, res, next) => {
    if(req.users){
        const token = jwt.sign({userId: req.users.id}, 'secret', {expiresIn: 2000});
        res.status(200).json({auth: true, token: token});
    }
};