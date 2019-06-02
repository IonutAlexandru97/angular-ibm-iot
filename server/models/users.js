const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = Schema({
    username: String,
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    saltSecret: String
});

userSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(this.password, salt, (err, hash)=> {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

userSchema.methods.generateJwt = function() {
    return jwt.sign({
        _id: this._id,
        username: this.username,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
    }, process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', userSchema);


module.exports = mongoose.model('User');

//http://www.codaffection.com/mean-stack-tutorial/mean-stack-login-and-logout-with-angular-6/#more-3090