import express from 'express';
import { routerV1 } from './api/v1/v1';
import * as path from "path";
import { __root } from './config';
const app = express();

app.disable("x-powered-by");
app.use("/v1", routerV1);

app.get("/google_signin", (req, res, next) => {
    res.sendFile(path.join(__root, "google_signin.html"));
});

app.listen(process.env.PORT || 8081, () => {
console.log("Server started at http://locahost:8081")
})