///* env variable stores current environment, By default it will be development. Manually you can pass environment through NODE_ENV  argument while starting your application as follows:
//
//"NODE_ENV=production node app.js"
//
//Configuration parameters are fetched into envConfig based on the environment. Inside the foreach loop, each of them is pushed into process.env key-value collection.*/ 
////check env
//var env = process.env.NODE_ENV || 'development';
//// fetch env config
//var config = require('./config.json');
//var envConfig = config[env];
////add env config values to process.env
//Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);

