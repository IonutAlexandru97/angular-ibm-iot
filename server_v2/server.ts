import express from "express";
import { routerV2 } from './api/v2/v2';
import * as path from "path";
import { __root } from './config';

const app = express();
const port = 8081;

app.disable("x-powered-by");
app.use("/v2", routerV2);
app.get("/google_signin", (req, res, next) => {
    res.sendFile(path.join(__root, "google_signin.html"));
});

app.listen(process.env.PORT || port, () => {
console.log(`Server started at http://localhost:${port}`)
})