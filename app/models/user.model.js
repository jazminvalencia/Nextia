const {DataTypes} = require('sequelize');
const { BaseClass } = require('./base.model.js');

class UserClass extends BaseClass {
    constructor() {
        super();
        this.name = {
            type: DataTypes.STRING,
            allowNull: false
        },
        this.user = {
            type: DataTypes.STRING,
            allowNull: false
        },
        this.password = {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
  }

module.exports = {UserClass, moduleName: 'user'};