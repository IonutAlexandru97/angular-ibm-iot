import * as bcrypt from "bcrypt-nodejs";
import { reject } from "pg-promise/typescript/ext-promise";
import { resolve } from "path";

function encryptPassword (password: string){
    var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return hash;
};

export const setPassword = encryptPassword;
