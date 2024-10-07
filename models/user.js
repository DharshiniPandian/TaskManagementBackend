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
   
      // User.hasMany(models.MasterUserRole, {
      //   foreignKey: 'created_by',
      //   as: 'rolecreatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterUserRole, {
      //   foreignKey: 'updated_by',
      //   as: 'roleupdatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterUserRole, {
      //   foreignKey: 'deleted_by',
      //   as: 'roledeletedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterUserStatus, {
      //   foreignKey: 'created_by',
      //   as: 'statuscreatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterUserStatus, {
      //   foreignKey: 'updated_by',
      //   as: 'statusupdatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterUserStatus, {
      //   foreignKey: 'deleted_by',
      //   as: 'statusdeletedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.belongsTo(models.MasterUserStatus, {
      //   foreignKey: 'status_id',
      //   as: 'statusid',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.belongsTo(models.MasterUserRole, {
      //   foreignKey: 'role_id',
      //   as: 'roleid',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterDomain, {
      //   foreignKey: 'created_by',
      //   as: 'domaincreatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterDomain, {
      //   foreignKey: 'updated_by',
      //   as: 'domainupdatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterDomain, {
      //   foreignKey: 'deleted_by',
      //   as: 'domaindeletedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterHashtag, {
      //   foreignKey: 'created_by',
      //   as: 'hashtagcreatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterHashtag, {
      //   foreignKey: 'updated_by',
      //   as: 'hashtagupdatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterHashtag, {
      //   foreignKey: 'deleted_by',
      //   as: 'hashtagdeletedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterGoalStatus, {
      //   foreignKey: 'created_by',
      //   as: 'goalstatuscreatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterGoalStatus, {
      //   foreignKey: 'updated_by',
      //   as: 'goalstatusupdatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.MasterGoalStatus, {
      //   foreignKey: 'deleted_by',
      //   as: 'goalstatusdeletedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      User.hasMany(models.Goal, {
        foreignKey: 'goal_created_by',
        as: 'goalowner',
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

      User.hasMany(models.MasterActionTypes, {
        foreignKey: 'created_by',
        as: 'actiontypecreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterActionTypes, {
        foreignKey: 'updated_by',
        as: 'actiontypeupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterActionTypes, {
        foreignKey: 'deleted_by',
        as: 'actiontypedeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterActionStatus, {
        foreignKey: 'created_by',
        as: 'actionstatuscreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterActionStatus, {
        foreignKey: 'updated_by',
        as: 'actionstatusupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterActionStatus, {
        foreignKey: 'deleted_by',
        as: 'actionstatusdeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterOverallActionStatus, {
        foreignKey: 'created_by',
        as: 'overallactionstatuscreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterOverallActionStatus, {
        foreignKey: 'updated_by',
        as: 'overallactionstatusupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterOverallActionStatus, {
        foreignKey: 'deleted_by',
        as: 'overallactionstatusdeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPriority, {
        foreignKey: 'created_by',
        as: 'prioritycreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPriority, {
        foreignKey: 'updated_by',
        as: 'priorityupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPriority, {
        foreignKey: 'deleted_by',
        as: 'prioritydeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterReasonType, {
        foreignKey: 'created_by',
        as: 'reasontypecreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterReasonType, {
        foreignKey: 'updated_by',
        as: 'reasontypeupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterReasonType, {
        foreignKey: 'deleted_by',
        as: 'reasontypedeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterReason, {
        foreignKey: 'created_by',
        as: 'reasoncreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterReason, {
        foreignKey: 'updated_by',
        as: 'reasonupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterReason, {
        foreignKey: 'deleted_by',
        as: 'reasondeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterTimeFrame, {
        foreignKey: 'created_by',
        as: 'timeframecreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterTimeFrame, {
        foreignKey: 'updated_by',
        as: 'timeframeupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterTimeFrame, {
        foreignKey: 'deleted_by',
        as: 'timeframedeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Action, {
        foreignKey: 'created_by',
        as: 'actioncreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Action, {
        foreignKey: 'updated_by',
        as: 'actionupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Action, {
        foreignKey: 'deleted_by',
        as: 'actiondeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Task, {
        foreignKey: 'created_by',
        as: 'taskcreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Task, {
        foreignKey: 'updated_by',
        as: 'taskupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Task, {
        foreignKey: 'deleted_by',
        as: 'taskdeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.TaskUser, {
        foreignKey: 'created_by',
        as: 'taskusercreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.TaskUser, {
        foreignKey: 'updated_by',
        as: 'taskuserupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.TaskUser, {
        foreignKey: 'deleted_by',
        as: 'taskuserdeletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      // User.hasMany(models.GoalUser, {
      //   foreignKey: 'user_id',
      //   as: 'goalusers',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE', 
      // });
      // User.hasMany(models.GoalUser, {
      //   foreignKey: 'created_by',
      //   as: 'goalusercreatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.GoalUser, {
      //   foreignKey: 'updated_by',
      //   as: 'goaluserupdatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.GoalUser, {
      //   foreignKey: 'deleted_by',
      //   as: 'goaluserdeletedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.GoalPhase, {
      //   foreignKey: 'created_by',
      //   as: 'goalphasecreatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.GoalPhase, {
      //   foreignKey: 'updated_by',
      //   as: 'goalphaseupdatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.GoalPhase, {
      //   foreignKey: 'deleted_by',
      //   as: 'goalphasedeletedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.PhaseUser, {
      //   foreignKey: 'user_id',
      //   as: 'goalphaseuser',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.PhaseUser, {
      //   foreignKey: 'created_by',
      //   as: 'goalphaseusercreatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.PhaseUser, {
      //   foreignKey: 'updated_by',
      //   as: 'goalphaseuserupdatedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

      // User.hasMany(models.PhaseUser, {
      //   foreignKey: 'deleted_by',
      //   as: 'goalphaseuserdeletedby',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // });

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