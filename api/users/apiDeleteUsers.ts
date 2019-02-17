import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

export const apiDeleteUsers: RequestHandler = (req, res, next) => {

   const tourID = req.params.id;
   const userIndex = DataStore.users.findIndex((item: any) => item.id == tourID);
   if(userIndex > -1){
       DataStore.users.splice(userIndex);
       res.json({"status": "success", "message": "Element removed"});
   }else{
       res.json({"status": "error", "message": "Element not found" });
   }

};