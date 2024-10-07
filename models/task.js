'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Task.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Task.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Task.belongsTo(models.MasterOverallActionStatus, {
        foreignKey: 'task_status',
        as: 'taskstatus',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Task.belongsTo(models.MasterReason, {
        foreignKey: 'reason_id',
        as: 'reasonid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Task.belongsTo(models.MasterTimeFrame, {
        foreignKey: 'planned_eta',
        as: 'plannedeta',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Task.belongsTo(models.Action, {
        foreignKey: 'action_id',
        as: 'actionid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Task.hasMany(models.TaskUser, {
        foreignKey: 'task_id',
        as: 'taskid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Task.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    },
    task_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    planned_eta: {
      type: DataTypes.INTEGER,
        allowNull: true,
      references: {
        model: 'master_time_frames', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    custom_planned_eta: {
      type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isInt: true,
        },
    }, 
    actual_eta: {
      type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isInt: true,
        },
    }, 
    reason_id: {
      type: DataTypes.INTEGER,
        allowNull: true,
      references: {
        model: 'master_reasons', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    task_status: {
      type: DataTypes.INTEGER,
        allowNull: true,
      references: {
        model: 'master_overall_Task_statuses', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return Task;
};