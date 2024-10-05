'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_goal_statuses', [
      {
        name: 'Not Started',
        is_active: true,
        created_by: 1, 
        created_at: new Date(),
      },
      {
        name: 'In Progress',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Completed',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'On Hold',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Cancelled',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_goal_statuses', null, {});
  }
};
