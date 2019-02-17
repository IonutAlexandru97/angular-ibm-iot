import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { usersDetail } from "../../model/shared/usersDetails";

export const apiGetUsers: RequestHandler = (req, res, next) => {
    res.json(DataStore.users.map((item: any, image: any) => new usersDetail(item, image)));
};