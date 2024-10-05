'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterGoalStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterGoalStatus.hasMany(models.Goal, {
        foreignKey: 'status',
        as: 'goalstatus',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
    }
  }
  MasterGoalStatus.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     },
     name: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
         notEmpty: true,
       }
     },
     is_active: {
       type: DataTypes.BOOLEAN,
       defaultValue: true,
       validate: {
         isIn: [[true, false]],
       }
     },
     createdBy: {
       type: DataTypes.INTEGER,
       allowNull: false,
       validate: {
         isInt: true,
       }
     },
     updatedBy: {
       type: DataTypes.INTEGER,
       allowNull: true,
       validate: {
         isInt: true,
       }
     },
  }, {
    sequelize,
    modelName: 'MasterGoalStatus',
    tableName: 'master_goal_statuses',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return MasterGoalStatus;
};