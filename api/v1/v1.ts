import { Router } from "express";
import { userRouter } from "./users/apiUsers";
import { logger } from "./general/logger";

export let routerV1 = Router();

routerV1.use(logger);
routerV1.use("/users", userRouter);

