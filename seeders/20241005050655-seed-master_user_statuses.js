'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_user_statuses', [
      {
        name: 'Active',
        is_active: true,
        created_by: 1, 
        created_at: new Date(),
      },
      {
        name: 'Inactive',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Suspended',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Pending',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Deleted',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Deactivated',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Banned',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      }
    ], {}); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_user_statuses', null, {});
  }
};
