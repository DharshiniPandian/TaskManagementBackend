'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_action_types', [
      {
        name: 'Meeting',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'Approval',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Agreement',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Feature',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Bug',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Support',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Lead',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_action_types', null, {});
  }
};
