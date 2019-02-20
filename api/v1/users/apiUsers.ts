import { Router } from "express";
import { apiGetUsersDetails } from "./apiGetUserDetail";
import { apiAddUser } from "./apiAddUser";
import { apiDeleteUsers } from "./apiDeleteUser";
import { apiUpdateUsers } from "./apiUpdateUser";
import { jsonParser } from "../general/bodyParser";
import { apiGetUsers } from "./apiGetUsers";

export let userRouter = Router();

userRouter.route("/")
.get(apiGetUsers)
.post(apiAddUser);

userRouter.route("/:id")
.get(jsonParser, apiGetUsersDetails)
.delete(apiDeleteUsers)
.patch(apiUpdateUsers);
