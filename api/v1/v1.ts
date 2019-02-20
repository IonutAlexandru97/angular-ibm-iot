import { Router } from "express";
import { userRouter } from "./users/apiUsers";
import { logger } from "./general/logger";
import { urlEncodedParser } from "./general/bodyParser";
import { apiTokenSignin } from "./auth/apiTokenSignin";

export let routerV1 = Router();

routerV1.use(logger);
routerV1.use("/users", userRouter);
routerV1.post("/tokensignin", urlEncodedParser, apiTokenSignin);

