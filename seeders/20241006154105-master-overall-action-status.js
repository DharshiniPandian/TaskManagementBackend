'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_overall_action_statuses', [
      {
        name: 'Mark as Closed',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'Celebrate',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Set as Highlight',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Copy Action Url',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Delete',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_overall_action_statuses', null, {});
  }
};
