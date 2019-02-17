import express from 'express';
const app = express();

import { DataStore } from "./data/data";
import { apiGetUsers } from './api/users/apiGetUsers';
import { apiGetUsersDetails } from './api/users/apiGetUsersDetail';
import { apiCreateUsers } from './api/users/apiCreateUser';
import { apiDeleteUsers } from './api/users/apiDeleteUsers';
import { apiUpdateUsers } from './api/users/apiUpdateUsers';
import * as bodyParser from "body-parser";
import morgan from "morgan";
import { apiUploadeImages } from './api/users/apiUploadImges';

const logger = morgan("dev");
const jsonParser = bodyParser.json();

app.use(logger);

app.get("/", (req, res, next) => {
    res.send("Homepage Route");
});


app.get("/users", logger, apiGetUsers);
app.get("/users/:id", apiGetUsersDetails);

app.post("/users", jsonParser, apiCreateUsers);
app.post("/users/:id/img", apiUploadeImages);

app.delete("/users/:id", apiDeleteUsers);

app.put("/users/:id", jsonParser ,apiUpdateUsers);

app.listen(process.env.PORT || 8080, () => {
console.log("Server started....")
})