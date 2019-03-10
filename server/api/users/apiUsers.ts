import { Router } from "express";
import { apiRegisterUser } from "./apiRegisterUser";
import { jsonParser } from "../general/jsonParser";
import { apiGetUsers } from "./apiGetUsers";
import { apiLoginUser } from "./apiLoginUser";

export let userRouter = Router();

userRouter.route("/register")
.post(jsonParser, apiRegisterUser);

userRouter.route("/all")
.get(jsonParser, apiGetUsers);

userRouter.route("/login")
.post(jsonParser, apiLoginUser);