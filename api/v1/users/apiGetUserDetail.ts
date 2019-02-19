import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { usersDetail } from "../../../model/shared/usersDetails";


export const apiGetUsersDetails: RequestHandler = (req, res, next) => {
    const userID = req.params.id;
    const selectedUser = DataStore.users.find((element: any) => element.id == userID);
    if(selectedUser) {
        const imageURLs = selectedUser.img;
        res.json(DataStore.users.map((item: any) => new usersDetail(item, imageURLs)));
    }else{
        res.json({"status": "failed", "message": "User not found" });
    }
};