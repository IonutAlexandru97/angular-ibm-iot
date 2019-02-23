import { Router } from "express";
import { apiRegisterUser } from "./apiRegisterUser";
import { jsonParser } from "../general/jsonParser";

export let userRouter = Router();

userRouter.route("/register")
.post(jsonParser, apiRegisterUser);