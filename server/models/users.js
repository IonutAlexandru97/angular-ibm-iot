const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var JWT_SECRET = 'secret'; 

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
    },JWT_SECRET,
    {
        expiresIn: 20000
    });
}

userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', userSchema);


module.exports = mongoose.model('User');
