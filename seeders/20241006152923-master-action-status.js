'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_action_statuses', [
      {
        type_id: 1,
        name: 'Pending',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 1,
        name: 'On going',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 1,
        name: 'Aborted',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 1,
        name: 'Completed',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 2,
        name: 'Pending',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 2,
        name: 'Approved',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 4,
        name: 'Pending',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 4,
        name: 'In Development',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 4,
        name: 'Depoloyed to Staging',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 4,
        name: 'Verified in Staging',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 4,
        name: 'Approved for Prod',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 4,
        name: 'Deployed to prod',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 4,
        name: 'Verified in prod',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        type_id: 4,
        name: 'Closed',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_action_statuses', null, {});
  }
};
