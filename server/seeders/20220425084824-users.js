'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'John',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'test1@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'soosoo',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'test2@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Zoro',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'test3@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'nami',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'test4@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'naruto',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'test5@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'bory',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'test6@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'tomato',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'test7@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'reo',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'test8@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'susan',
          profile: 'https://joeschmoe.io/api/v1/random',
          email: 'test9@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
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
