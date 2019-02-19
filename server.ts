import express from 'express';
import { routerV1 } from './api/v1/v1';
const app = express();


app.use("/v1", routerV1);

app.listen(process.env.PORT || 8080, () => {
console.log("Server started at http://locahost:8080")
})