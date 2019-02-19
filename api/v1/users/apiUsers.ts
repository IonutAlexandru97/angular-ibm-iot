import { Router } from "express";
import { apiGetUsersDetails } from "./apiGetUserDetail";
import { apiAddUser } from "./apiAddUser";
import { apiDeleteUsers } from "./apiDeleteUser";
import { apiUpdateUsers } from "./apiUpdateUser";
import { jsonParser } from "../general/bodyParser";

export let userRouter = Router();

userRouter.route("/")
.get(apiGetUsersDetails)
.post(jsonParser, apiAddUser);

userRouter.route("/:id")
.get(apiGetUsersDetails)
.delete(apiDeleteUsers)
.patch(apiUpdateUsers);
