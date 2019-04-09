import { Request, Response, NextFunction } from "express";
import * as usersModel from "../model/users";

export interface CustomRequest extends Request {
    users?: usersModel.users;
}

export interface CustomResponse extends Response{

}

export type CustomRequestHandler = (req: CustomRequest, res: CustomResponse, next: NextFunction) => any;