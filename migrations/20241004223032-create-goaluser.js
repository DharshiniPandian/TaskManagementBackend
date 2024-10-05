'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goal_users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, 
        primaryKey: true,
        allowNull: false,
      },
      goal_id: {
        type: Sequelize.UUID,
          references: {
            model: 'goals', 
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      user_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
        references: {
          model: 'users', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }, 
      is_owner: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      is_assignee: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') 
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('goal_users');
  }
};