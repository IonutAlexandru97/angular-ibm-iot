require('../models/users');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useCreateIndex: true}, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});
