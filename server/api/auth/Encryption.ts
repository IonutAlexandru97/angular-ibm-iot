import * as bcrypt from "bcrypt-nodejs";

function encryptPassword (password: string){
    var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return hash;
};
export const setPassword = encryptPassword;