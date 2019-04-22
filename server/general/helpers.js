import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const { secret } = require('../database/secret.json');
const morgan = require('morgan');

const Helper = {
    hashPassword(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    },

    comparePassword(hashPassword, password){
        return bcrypt.compareSync(password, hashPassword);
    },

    isValidEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    },

    generateToken(id){
        const token = jwt.sign({
            userId: id
        },
        secret, {expiresIn: '7d'});
        return token;
    }
}

export default Helper;