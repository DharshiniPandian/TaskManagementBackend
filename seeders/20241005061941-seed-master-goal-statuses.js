'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_goal_statuses', [
      {
        name: 'Not Started',
        is_active: true,
        created_by: 1, 
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        name: 'In Progress',
        is_active: true,
        created_by: 1,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        name: 'Completed',
        is_active: true,
        created_by: 1,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        name: 'On Hold',
        is_active: true,
        created_by: 1,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        name: 'Cancelled',
        is_active: true,
        created_by: 1,
        updated_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('master_goal_statuses', null, {});

  }
};
