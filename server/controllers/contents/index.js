const { posts, like } = require('../../models');

module.exports = {
  allPost: async (req, res) => {
    // 모든 컨텐츠 정보 불러오기 (제목,사진?)
    const { stack } = req.query;
    const a = await posts.findAll({ where: { stack: stack } });
    res.send(a);
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
