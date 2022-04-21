const express = require('express');
const {
  write,
  remove,
  update,
  donePost,
  likePost,
  unlikePost,
  post,
} = require('../controllers/content');

const router = express.Router();

router.post('/', write); // 컨텐츠 작성
router.patch('/:contentId', update); // 작성한 컨텐츠 수정
router.delete('/:contentId', remove); // 컨텐츠 삭제
router.post('/:contentId/done', donePost); // 작성한 컨텐츠 문제 해결
router.post('/:contentId/like', likePost); // 컨텐츠 좋아요 요청
router.post('/:contentId/unlike', unlikePost); // 컨텐츠 좋아요 취소
router.get('/:contentId', post); // 컨텐츠 디테일 정보 가져오기

module.exports = router;
