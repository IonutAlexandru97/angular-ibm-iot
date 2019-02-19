import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/messages";

export const apiDeleteUsers: RequestHandler = (req, res, next) => {

   const userID = req.params.id;
   const userIndex = DataStore.users.findIndex((item: any) => item.id == userID);
   if(userIndex > -1){
       DataStore.users.splice(userIndex);
       res.json(new PublicInfo("User deleted", 200));
   }else{
       next(new APIError("Validation Error", "User not found", 400));
   }

};