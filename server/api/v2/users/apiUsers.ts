import { Router } from "express";
import { apiAddUser } from "./apiAddUser";
import { apiGetUserDetail } from "./apiGetUserDetail";
import { apiDeleteUser } from "./apiDeleteUser";
import { apiUpdateUser } from "./apiUpdateUser";
import { apiSessionVerify } from "../auth/sessionVerify";
import { apiGetUsers } from "./apiGetUsers";

export let userRouter = Router();

userRouter.route("/")
.post(apiAddUser)
.get(apiGetUsers);

userRouter.route("/:id")
.get(apiGetUserDetail)
.delete(apiDeleteUser)
.patch(apiUpdateUser);
