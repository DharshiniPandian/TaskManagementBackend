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
        as: 'goalphases',
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
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    },
    goal_id:  {
      type: DataTypes.UUID,
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
    is_active:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      validate: {
        isIn: [[true, false]],
      }
    },
    createdBy:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      }
    },
    updatedBy:{
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
      }
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