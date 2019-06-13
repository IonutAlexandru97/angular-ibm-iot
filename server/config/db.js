require('../models/users');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-jzqd0.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true}, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});
