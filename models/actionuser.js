'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActionUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ActionUser.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      ActionUser.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      ActionUser.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      ActionUser.belongsTo(models.Action, {
        foreignKey: 'action_id',
        as: 'actionid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  ActionUser.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    },
    action_id: {
      type: DataTypes.UUID,
        allowNull: false,
      references: {
        model: 'actions', 
        key: 'id',
      },
    }, 
    user_id: {
      type: DataTypes.INTEGER,
        allowNull: false,
      references: {
        model: 'users', 
        key: 'id',
      },
    }, 
    is_owner:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        isIn: [[true, false]],
      }
    },
    is_assignee: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        isIn: [[true, false]],
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
    modelName: 'ActionUser',
    tableName: 'action_users',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at',
  });
  return ActionUser;
};