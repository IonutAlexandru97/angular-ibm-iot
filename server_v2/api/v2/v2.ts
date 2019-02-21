import { Router } from "express";
import { logger } from "../general/logger";
import { apiCors } from "../general/cors";
import { apiValidation } from "../general/validation";
import { apiSessionVerify} from "./auth/sessionVerify";
import { userRouter } from "./users/apiUsers";
import { urlEncodedParser } from "../general/bodyParser";
import { apiTokenSignin } from "./auth/tokenSignin";
import { apiErrorHandler } from "../general/errorHandling";

export let routerV2 = Router();

routerV2.use(logger)
routerV2.use(apiCors);
routerV2.use(apiValidation);
routerV2.use(apiSessionVerify);
routerV2.use("/users", userRouter);

routerV2.post("/tokensignin", urlEncodedParser, apiTokenSignin);
routerV2.use(apiErrorHandler);