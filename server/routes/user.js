const express = require('express');
const {
  login,
  logout,
  signup,
  signout,
  post,
  userInfo,
  password,
} = require('../controllers/users');

const router = express.Router();

router.post('/login', login); // 로그인 요청
router.post('/logout', logout); // 로그아웃 요청
router.post('/signup', signup); // 회원가입 요청
router.delete('/signout', signout); // 회원탈퇴 요청
router.get('/contents', post); // 마이페이지에서 유저가 작성한 컨텐츠 요청
router.patch('/userInfo', userInfo); // 마이페이지에서 유저 정보 변경 요청
router.patch('/password', password); // 마이페이지에서 비밀번호 변경 요청
