'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'posts',
      [
        {
          userId: 1,
          title: 'JavaScript는 왜필요한가요?',
          content: '질문 드립니다',
          stack: 'JavaScript',
          chatroomId: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: 'How to sequelize migrate',
          content: '질문 드립니다',
          stack: 'SQL',
          chatroomId: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          title: 'Shell이 무엇인가요?',
          content: '질문 드립니다',
          stack: 'Shell',
          chatroomId: '3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          title: 'Bash가 무엇인가요?',
          content: '질문 드립니다',
          stack: 'Bash',
          chatroomId: '4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          title: 'C++ 질문 있어요',
          content: '질문 드립니다',
          stack: 'C++',
          chatroomId: '5',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          title: 'JSON이 무엇인가요?',
          content: '질문 드립니다',
          stack: 'JSON',
          chatroomId: '6',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          title: '리액트 공부법',
          content: '질문 드립니다',
          stack: 'React',
          chatroomId: '7',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          title: 'Java 질문 드립니다',
          content: '질문 드립니다',
          stack: 'Java',
          chatroomId: '8',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          title: 'Vue가 무엇인가요',
          content: '질문 드립니다',
          stack: 'Vue',
          chatroomId: '9',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  },
};
