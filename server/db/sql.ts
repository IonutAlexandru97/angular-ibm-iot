import * as path from "path";
import { pgp } from "../db/db";

function sql (file: string){
    const fullPath = path.join(__dirname, file);
    return new pgp.QueryFile(fullPath, {minify: true});
}

export const users = {
    search: sql("queries/users/search.sql")
}