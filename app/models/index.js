const dbConfig = require("../config/db.config.js");
const Base = require("./base.model");
const User = require("./user.model");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  define :{
    timestamps: false
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.base = sequelize.define(Base.moduleName, new Base.BaseClass());
db.user = sequelize.define(User.moduleName,new User.UserClass());

module.exports = db;
