import * as bodyParser from "body-parser";

export const jsonParser = bodyParser.json();
export const urlEncodedParserd = bodyParser.urlencoded({extended: true});