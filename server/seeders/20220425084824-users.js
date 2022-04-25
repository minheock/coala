'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'John',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'gaga12@coala.com',
          password: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'soosoo',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'nana@coala.com',
          password: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Zoro',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'dada@coala.com',
          password: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'nami',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'rara@coala.com',
          password: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'naruto',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'reaf@coala.com',
          password: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'bory',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'cats@coala.com',
          password: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'tomato',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'mama@coala.com',
          password: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'reo',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'baba@coala.com',
          password: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'susan',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'dada@coala.com',
          password: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
