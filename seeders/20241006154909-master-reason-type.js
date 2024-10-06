'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_reason_types', [
      {
        name: 'Positive',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'Negative',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Neutral',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_reason_types', null, {});
  }
};
