import { Router } from "express";
import { jsonParser } from "../general/jsonParser";
import { apiRegisterUser } from "./apiRegisterUser";
import { apiLoginUser } from "./apiLoginUser";


export let authRouter = Router();

authRouter.route("/register")
.post(jsonParser, apiRegisterUser);

authRouter.route("/login")
.post(jsonParser, apiLoginUser);