'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goals', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      domain_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_domains', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      goal_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      goal_description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      hashtag_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_hashtags', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      start_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      goal_created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_goal_statuses', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      is_active: {
        type: Sequelize.BOOLEAN,
      },
      updated_by: {
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
    await queryInterface.dropTable('goals');
  }
};