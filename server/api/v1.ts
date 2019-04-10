import { Router } from "express";
import { userRouter } from "./users/apiUsers";
import { logger } from "./general/logger";
import { apiCors } from "./general/apiCors";
import { apiValidation } from "./general/apiValidation";
import { authRouter } from "./auth/apiAuth";

export let routerV1 = Router();

routerV1.use(logger);
routerV1.use(apiCors);
routerV1.use(apiValidation);
routerV1.use("/users", userRouter);
routerV1.use("/auth", authRouter);