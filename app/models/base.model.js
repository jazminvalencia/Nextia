const {DataTypes} = require('sequelize');
class BaseClass {
    constructor() {
        this.id = {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          this.created_at = {
            type: DataTypes.DATE,
            allowNull: false,
          },
          this.updated_at = {
            type: DataTypes.DATE,
            allowNull: false,
          }
    }
  }

module.exports = {BaseClass, moduleName: 'base'};