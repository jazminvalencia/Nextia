const dotenv = require('dotenv');
const path = require('path');
console.log(process.env.NODE_ENV);
dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV || 'development'}.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV,
    HOST : process.env.HOST,
    USER : process.env.USER,
    PASSWORD : process.env.PASSWORD,
    DB : process.env.DB,
    DIALECT : process.env.DIALECT,
    PORT : process.env.PORT,
    SECRET : process.env.SECRET
}