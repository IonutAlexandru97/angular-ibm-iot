import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

export const apiUpdateUsers: RequestHandler = (req, res, next) => {

   const userID = req.params.id;
   const userIndex = DataStore.users.findIndex((item: any) => item.id == userID);
   if(userIndex > -1){
    const newUser = {
        id: userID,
        name: req.body.name || "",
        username: req.body.username || "",
        email: req.body.email || "",
        password: req.body.password || "",
        role: req.body.role || "",
        img: req.body.img || ""
    }
        DataStore.users[userIndex] = newUser;
       res.json({"status": "success", "message": "Element updated"});
   }else{
       res.json({"status": "error", "message": "Element not found" });
   }

};