const {DataTypes} = require('sequelize');
const { BaseClass } = require('./base.model.js');

class GoodClass extends BaseClass {
    constructor() {
        super();
        this.article = {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [0,255] }
        },
        this.description = {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [0,255] }
        },
        this.userId = {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { 
                model: 'users',
                key: 'id'
              }
        }
    }
  }

module.exports = {GoodClass, moduleName: 'good'};