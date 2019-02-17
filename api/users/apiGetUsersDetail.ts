import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { usersDetail } from "../../model/shared/usersDetail";


export const apiGetUsersDetails: RequestHandler = (req, res, next) => {
    const userID = req.params.id;
    const selectedUser = DataStore.users.find((element: any) => element.id == userID);
    if(selectedUser) {
        res.json(DataStore.users.map((item: any) => new usersDetail(item)));
    }else{
        res.json({"status": "failed", "message": "User not found" });
    }
};