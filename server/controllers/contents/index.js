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
        // console.log(data[0].dataValues.likers[0].dataValues.userId);
        const post = data.map((el) => el.get({ plain: true }));
        post.map((el) => {
          if (el.likers) {
            el.likers.map((ele) => {
              ele = ele.userId;
              console.log(ele);
              return ele;
            });
          }
          return el;
          // console.log(el.likers);
        });
        console.log(post);
        res.status(200).send(data);
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
