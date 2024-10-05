'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GoalUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GoalUser.belongsTo(models.Goal, {
        foreignKey: 'goal_id',
        as: 'goal',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      GoalUser.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });
    }
  }
  GoalUser.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    },
    goal_id: {
      type: DataTypes.UUID,
        references: {
          model: 'goals', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    user_id: {
      type: DataTypes.INTEGER,
        allowNull: false,
      references: {
        model: 'users', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    is_active:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      validate: {
        isIn: [[true, false]],
      }
    },
    created_by:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      }
    },
    updated_by:{
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
      }
    },
  }, {
    sequelize,
    modelName: 'GoalUser',
    tableName: 'gosl_users',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at',
  });
  return GoalUser;
};