import { Router } from "express";
import { jsonParser } from "../general/jsonParser";
import { apiRegisterUser } from "./apiRegisterUser";


export let authRouter = Router();

authRouter.route("/register")
.post(jsonParser, apiRegisterUser);