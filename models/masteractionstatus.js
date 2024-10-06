'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterActionStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterActionStatus.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterActionStatus.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterActionStatus.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterActionStatus.belongsTo(models.User, {
        foreignKey: 'type_id',
        as: 'actiontype',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterActionStatus.hasMany(models.Action, {
        foreignKey: 'action_status',
        as: 'actionstatus',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  MasterActionStatus.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     },
     type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_action_types', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
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
     created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'MasterActionStatus',
    tableName: 'master_action_statuses',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return MasterActionStatus;
};