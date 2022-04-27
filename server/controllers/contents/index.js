const { posts, like, users } = require('../../models');
const { sequelize } = require('sequelize');

module.exports = {
  allPost: async (req, res) => {
    // 모든 컨텐츠 정보 불러오기 (제목,사진?)
    await posts
      .findAll({
        include: [
          {
            model: users,
            required: true,
            as: 'userInfo',
            attributes: ['id', 'username', 'profile'],
          },
          {
            model: like,
            as: 'likers',
            attributes: ['userId'],
          },
        ],
        attributes: [
          'id',
          'title',
          'description',
          'updatedAt',
          'stack',
          'thumbnail',
          'done',
        ],
        order: [['id', 'DESC']],
      })
      .then((data) => {
        const post = data.map((el) => el.get({ plain: true }));
        for (let i = 0; i < post.length; i++) {
          if (post[i].likers) {
            for (let q = 0; q < post[i].likers.length; q++) {
              post[i].likers[q] = post[i].likers[q].userId;
            }
          }
        }
        res.status(200).send({ message: '요청 성공', data: post });
      });
  },
  filterPost: (req, res) => {
    // 스택별로 필터링 해서 컨텐츠 정보 불러오기
  },
  scrollPost: (req, res) => {
    // 무한 스크롤 요청
  },
  findPost: (req, res) => {
    // 특정 키워드로 컨텐츠 검색
  },
  findDone: (req, res) => {
    // 해결완료만 필터
  },
  findUndone: (req, res) => {
    // 미해결만 필터
  },
};
