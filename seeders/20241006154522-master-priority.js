'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_priorities', [
      {
        name: 'Critical',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'High',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Medium',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: 'Low',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_priorities', null, {});
  }
};
