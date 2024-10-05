'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'role_id', {
      type: Sequelize.INTEGER,
      allowNull: false,  
      references: {
        model: 'master_user_roles',  
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addColumn('users', 'status_id', {
      type: Sequelize.INTEGER,
      allowNull: false,  
      references: {
        model: 'master_user_statuses',  
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'role_id');
    await queryInterface.removeColumn('users', 'status_id');
  }
};
