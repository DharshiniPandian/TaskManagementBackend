'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Goal.belongsTo(models.User, {
        foreignKey: 'goal_created_by',
        as: 'goalowner',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Goal.belongsTo(models.MasterDomain, {
        foreignKey: 'domain_id',
        as: 'domain',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Goal.belongsTo(models.MasterHashTag, {
        foreignKey: 'hashtag_id',
        as: 'hashtag',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Goal.belongsTo(models.MasterGoalStatus, {
        foreignKey: 'status',
        as: 'goalstatus',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Goal.hasMany(models.GoalUser, {
        foreignKey: 'goal_id',
        as: 'goal',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Goal.hasMany(models.GoalPhase, {
        foreignKey: 'goal_id',
        as: 'goalphases',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });
    }
  }
  Goal.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    },
    domain_id: {
      type: DataTypes.INTEGER,
        references: {
          model: 'master_domains', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    goal_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    goal_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    hashtag_id:  {
      type: DataTypes.INTEGER,
        allowNull: false,
      references: {
        model: 'master_hashtags', 
        key: 'id',
      },
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
    goal_created_by: {
      type: DataTypes.INTEGER,
        allowNull: false,
      references: {
        model: 'users', 
        key: 'id',
      },
    }, 
    status_id: {
      type: DataTypes.INTEGER,
        allowNull: false,
      references: {
        model: 'master_goal_statuses', 
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
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      }
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
      }
    },

  }, {
    sequelize,
    modelName: 'Goal',
    tableName: 'goals',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at',
  });
  return Goal;
};