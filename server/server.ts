import * as express from "express";
import { routerV1 } from "./api/v1";
import * as path from "path";
import { logger } from "./api/general/logger";
import { apiCors } from "./api/general/apiCors";
import { apiValidation } from "./api/general/apiValidation";


const port = 3001;
const app = express();

app.disable("X-powered-by");
app.use("/v1", routerV1);

app.use(express.static(__dirname));
console.log(__dirname);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));



app.listen(process.env.PORT || port, () => console.log(`Server started at http://localhost:${port}`));