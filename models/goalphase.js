'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GoalPhase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GoalPhase.belongsTo(models.Goal, {
        foreignKey: 'goal_id',
        as: 'goal',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      GoalPhase.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      GoalPhase.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      GoalPhase.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      GoalPhase.hasMany(models.PhaseUser, {
        foreignKey: 'phase_id',
        as: 'phase',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  GoalPhase.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    goal_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'goals', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    phase_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
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
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      validate: {
        isIn: [[true, false]],
      }
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
    modelName: 'GoalPhase',
    tableName: 'goal_phases',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return GoalPhase;
};