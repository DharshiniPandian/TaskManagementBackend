'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.MasterUserRole, {
        foreignKey: 'role_id',
        as: 'role',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      User.belongsTo(models.MasterUserStatus, {
        foreignKey: 'status_id',
        as: 'status',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      User.hasMany(models.GoalUser, {
        foreignKey: 'user_id',
        as: 'user',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      User.hasMany(models.PhaseUser, {
        foreignKey: 'user_id',
        as: 'phaseuser',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
        allowNull: false,
      references: {
        model: 'master_user_roles', 
        key: 'id',
      },
    }, 
    status_id: {
      type: DataTypes.INTEGER,
        allowNull: false,
      references: {
        model: 'master_user_statuses', 
        key: 'id',
      },
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
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at',
  });
  return User;
};