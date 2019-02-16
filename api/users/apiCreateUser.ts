import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";

export const apiCreateUsers: RequestHandler = (req, res, next) => {
    const newUser = {
        id: uuid(),
        name: req.body.name || "",
        username: req.body.username || "",
        email: req.body.email || "",
        password: req.body.password || "",
        role: req.body.role || ""
    }

    DataStore.users.push(newUser);
    res.send("New user created");
};