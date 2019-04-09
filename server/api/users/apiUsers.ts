import { Router } from "express";
import { jsonParser } from "../general/jsonParser";
import { apiGetUsers } from "./apiGetUsers";
import { apiGetUserDetails } from "./apiGetUserDetails";

export let userRouter = Router();

//userRouter.route("/all")
//.get(jsonParser, apiGetUsers);

userRouter.route("/:id")
.get(jsonParser, apiGetUserDetails);
