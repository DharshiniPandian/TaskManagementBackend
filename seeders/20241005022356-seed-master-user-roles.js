'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_user_roles', [
      {
        name: 'UI/UX',
        is_active: true,
        createdBy: 1, 
        updatedBy: 1,  
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'DevOps',
        is_active: true,
        createdBy: 1,
        updatedBy: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Frontend Developer',
        is_active: true,
        createdBy: 1,
        updatedBy: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Backend Developer',
        is_active: true,
        createdBy: 1,
        updatedBy: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Fullstack Developer',
        is_active: true,
        createdBy: 1,
        updatedBy: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Designer',
        is_active: true,
        createdBy: 1,
        updatedBy: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_user_roles', null, {});
  }
};
