'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_reasons', [
      {
        reason_type_id: 1,
        name: 'Way too much buffer',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 1,
        name: 'Everything happened as per plan',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 1,
        name: 'There was no technical hurdles',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 1,
        name: 'Dependancies were cleaned effectively',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 1,
        name: 'Improper planning',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 1,
        name: 'Other',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 2,
        name: 'Technical difficulties',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 2,
        name: 'Estimation was low',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 2,
        name: 'Skill gap was present',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 2,
        name: 'Delayed due to dependencies',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 2,
        name: 'Planning could have been better',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 2,
        name: 'Other',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
      {
        reason_type_id: 3,
        name: 'Other',
        is_active: true,
        created_by: 1,   
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_reasons', null, {});
  }
};
