const { HOST,USER,PASSWORD,DB,DIALECT } =  require('../env/config');
module.exports = {
  HOST: HOST ,
  USER: USER,
  PASSWORD: PASSWORD,
  DB: DB,
  dialect: DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
