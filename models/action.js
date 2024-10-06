'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Action.belongsTo(models.Goal, {
        foreignKey: 'goal_id',
        as: 'goal',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Action.belongsTo(models.GoalPhase, {
        foreignKey: 'phase_id',
        as: 'phase',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Action.belongsTo(models.MasterTimeFrame, {
        foreignKey: 'planned_eta',
        as: 'plannedeta',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Action.belongsTo(models.MasterReason, {
        foreignKey: 'reason_id',
        as: 'reason',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Action.belongsTo(models.MasterPriority, {
        foreignKey: 'priority_id',
        as: 'priority',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Action.belongsTo(models.MasterActionTypes, {
        foreignKey: 'action_type',
        as: 'actiontype',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Action.belongsTo(models.MasterActionStatus, {
        foreignKey: 'action_status',
        as: 'actionstatus',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Action.belongsTo(models.MasterOverallActionStatus, {
        foreignKey: 'status',
        as: 'actualactionstatus',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Action.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Action.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Action.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Action.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    },
    goal_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
        references: {
          model: 'goals', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    phase_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
        references: {
          model: 'goal_phases', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    action_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    action_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    start_at: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true, 
        isBeforeEndAt(value) { 
          if (this.end_at && value >= this.end_at) {
            throw new Error('Start date must be before the end date');
          }
        }
      }
    },
    end_at:{
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true, 
        isAfterStartAt(value) { 
          if (this.start_at && value <= this.start_at) {
            throw new Error('End date must be after the start date');
          }
        }
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
    priority_id: {
      type: DataTypes.INTEGER,
        allowNull: false,
      references: {
        model: 'master_priorities', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    action_type: {
      type: DataTypes.INTEGER,
        allowNull: false,
      references: {
        model: 'master_action_types', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    action_status: {
      type: DataTypes.INTEGER,
        allowNull: true,
      references: {
        model: 'master_action_statuses', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    status: {
      type: DataTypes.INTEGER,
        allowNull: true,
      references: {
        model: 'master_overall_action_statuses', 
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
    modelName: 'Action',
    tableName: 'actions',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return Action;
};