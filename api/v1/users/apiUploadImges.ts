import { DataStore} from "../../../data/data";
import { RequestHandler } from "express";
import  * as staticFileService from "../general/static";

export const apiUploadeImages: RequestHandler = (req, res, next) => {
    const userID = req.params.id;
    const userIndex = DataStore.users.findIndex((item: any) => item.id == userID);
    if(userIndex == -1){
        res.json({"status": "error", "message": "User not found"});
    }else{
        const upload = staticFileService.getFileUploader(req.app.get("env"))
        upload(req, res, (err) => {
            if(err){
                console.log(err);
                res.json({"status": "error", "message": "File upload failed"});
            }else{
                DataStore.users[userIndex].img.push(req.file.filename);
                res.json({"status": "Success", "message": "File upload success!"});
            }
        });
    }
}