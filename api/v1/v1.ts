import { Router } from "express";
import { userRouter } from "./users/apiUsers";
import { logger } from "./general/logger";
import { urlEncodedParser } from "./general/bodyParser";
import { apiTokenSignin } from "./auth/apiTokenSignin";
import { apiSessionVerify } from "./auth/sessionVerify";

export let routerV1 = Router();

routerV1.use(logger);
routerV1.use(apiSessionVerify);
routerV1.use("/users", userRouter);
routerV1.post("/tokensignin", urlEncodedParser, apiTokenSignin);

