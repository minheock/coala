const express = require('express');
const {
  allPost,
  filterPost,
  scrollPost,
  findPost,
} = require('../controllers/contents');

const router = express.Router();

router.get('/', allPost); // 모든컨텐츠 가져오기
router.get('/', filterPost); // 스택별로 필터링해서 컨텐츠 가져오기.
router.get('/', scrollPost); // 무한스크롤 시 마지막 아이디 보내서 나머지 컨텐츠 요청
router.get('/', findPost); // 키워드로 컨텐츠 검색

module.exports = router;
