import express from 'express';
const app = express();

import { DataStore } from "./data/data";
import { apiGetUsers } from './api/users/apiGetUsers';
import { apiGetUsersDetails } from './api/users/apiGetUsersDetail';
import {apiCreateUsers } from './api/users/apiCreateUser';
import * as bodyParser from "body-parser";
import { apiDeleteUsers } from './api/users/apiDeleteUsers';

const jsonParser = bodyParser.json();

console.log(DataStore.users);

app.get("/", (req, res, next) => {
    res.send("Homepage Route");
});


app.get("/users", apiGetUsers);
app.get("/users/:id", apiGetUsersDetails);

app.post("/users", jsonParser, apiCreateUsers);

app.delete("/users/:id", apiDeleteUsers);

app.listen(process.env.PORT || 8080, () => {
console.log("Server started....")
})