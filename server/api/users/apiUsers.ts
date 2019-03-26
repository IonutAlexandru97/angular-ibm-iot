import { Router } from "express";
import { apiRegisterUser } from "./apiRegisterUser";
import { jsonParser } from "../general/jsonParser";
import { apiGetUsers } from "./apiGetUsers";
import { apiLoginUser } from "./apiLoginUser";
import { apiSessionVerify } from "../auth/sessionVerify";
import { apiGetUserDetails } from "./apiGetUserDetails";

export let userRouter = Router();

userRouter.route("/register")
.post(jsonParser, apiRegisterUser);

userRouter.route("/all")
.get(jsonParser, apiSessionVerify, apiGetUsers);

//userRouter.route("/:id")
//.get(apiGetUserDetails);

userRouter.route("/login")
.post(jsonParser, apiLoginUser);