'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_time_frames', [
      {
        name: 'XXS',
        time_duration: 1,
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'XS',
        time_duration: 3,
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'S',
        time_duration: 4,
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'M',
        time_duration: 10,
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'L',
        time_duration: 25,
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'XL',
        time_duration: 41,
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'XXL',
        time_duration: 66,
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        name: 'XXXL',
        time_duration: 107,
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_time_frames', null, {});
  }
};
