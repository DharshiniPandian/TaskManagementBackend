'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_hashtags', [
      {
        name: '#Technology',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: '#Programming',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: '#SoftwareDevelopment',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: '#WebDevelopment',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: '#DataScience',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: '#AI',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: '#MachineLearning',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: '#DevOps',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: '#CyberSecurity',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
      {
        name: '#CloudComputing',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_hashtags', null, {});
  }
};
