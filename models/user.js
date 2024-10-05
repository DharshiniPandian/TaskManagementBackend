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
      User.hasMany(models.MasterUserRole, {
        foreignKey: 'created_by',
        as: 'rolecreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterUserRole, {
        foreignKey: 'updated_by',
        as: 'roleupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterUserRole, {
        foreignKey: 'deleted_by',
        as: 'roledeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterUserStatus, {
        foreignKey: 'created_by',
        as: 'statuscreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterUserStatus, {
        foreignKey: 'updated_by',
        as: 'statusupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterUserStatus, {
        foreignKey: 'deleted_by',
        as: 'statusdeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.belongsTo(models.MasterUserStatus, {
        foreignKey: 'status_id',
        as: 'statusid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.belongsTo(models.MasterUserRole, {
        foreignKey: 'role_id',
        as: 'roleid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterDomain, {
        foreignKey: 'created_by',
        as: 'domaincreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterDomain, {
        foreignKey: 'updated_by',
        as: 'domainupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterDomain, {
        foreignKey: 'deleted_by',
        as: 'domaindeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterHashtag, {
        foreignKey: 'created_by',
        as: 'hashtagcreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterHashtag, {
        foreignKey: 'updated_by',
        as: 'hashtagupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterHashtag, {
        foreignKey: 'deleted_by',
        as: 'hashtagdeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterGoalStatus, {
        foreignKey: 'created_by',
        as: 'goalstatuscreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterGoalStatus, {
        foreignKey: 'updated_by',
        as: 'goalstatusupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterGoalStatus, {
        foreignKey: 'deleted_by',
        as: 'goalstatusdeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Goal, {
        foreignKey: 'goal_created_by',
        as: 'goalcreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Goal, {
        foreignKey: 'updated_by',
        as: 'goalupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Goal, {
        foreignKey: 'deleted_by',
        as: 'goaldeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.GoalUser, {
        foreignKey: 'user_id',
        as: 'goalusers',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });
      User.hasMany(models.GoalUser, {
        foreignKey: 'created_by',
        as: 'goalusercreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.GoalUser, {
        foreignKey: 'updated_by',
        as: 'goaluserupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.GoalUser, {
        foreignKey: 'deleted_by',
        as: 'goaluserdeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.GoalPhase, {
        foreignKey: 'created_by',
        as: 'goalphasecreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.GoalPhase, {
        foreignKey: 'updated_by',
        as: 'goalphaseupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.GoalPhase, {
        foreignKey: 'deleted_by',
        as: 'goalphasedeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.PhaseUser, {
        foreignKey: 'user_id',
        as: 'goalphaseuser',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.PhaseUser, {
        foreignKey: 'created_by',
        as: 'goalphaseusercreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.PhaseUser, {
        foreignKey: 'updated_by',
        as: 'goalphaseuserupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.PhaseUser, {
        foreignKey: 'deleted_by',
        as: 'goalphaseuserdeletedby',
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
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      validate: {
        isIn: [[true, false]],
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