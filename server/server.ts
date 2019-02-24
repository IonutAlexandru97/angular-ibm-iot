import * as express from "express";
import { routerV1 } from "./api/v1";

const port = 3000;
const app = express();

app.disable("X-powered-by");
app.use("/v1", routerV1);
app.listen(process.env.PORT || port, () => console.log(`Server started at http://localhost:${port}`));