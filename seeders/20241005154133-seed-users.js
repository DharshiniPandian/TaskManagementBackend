'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        path: '/images/user1',
        is_active: true,
        created_at: new Date(),
      },
      {
        name: 'Jane Smith',
        path: '/images/user2',
        is_active: false,
        created_at: new Date(),
      },
      {
        name: 'Alice Brown',
        path: '/images/user3',
        is_active: true,
        created_at: new Date(),
      },
      {
        name: 'Bob Johnson',
        path: '/images/user4',
        is_active: true,
        created_at: new Date(),
      },
      {
        name: 'Charlie Williams',
        path: '/images/user5',
        is_active: false,
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
