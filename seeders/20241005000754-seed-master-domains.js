'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_domains', [
      {
        name: 'Software Development',
        is_active: true,
        createdBy: 1,   
        updatedBy: 1,   
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Marketing',
        is_active: true,
        createdBy: 1,
        updatedBy: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Support',
        is_active: true,
        createdBy: 1,
        updatedBy: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Sales',
        is_active: true,
        createdBy: 1,
        updatedBy: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Others',
        is_active: true,
        createdBy: 1,
        updatedBy: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_domains', null, {});
  }
};
