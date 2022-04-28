'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'chatrooms',
      [
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chatrooms', null, {});
  },
};
