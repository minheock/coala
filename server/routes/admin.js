const express = require('express');
const { allUser, findUser, delPost, delUser } = require('../controllers/admin');
const router = express.Router();

router.get('/user', allUser); // 전체 유저 조회
router.get('/:user', findUser); // 특정 유저 검색
router.delete('/userId/:id', delUser); // 특정 유저 삭제
router.delete('/contentId', delPost); // 특정 컨텐츠 삭제

module.exports = router;
