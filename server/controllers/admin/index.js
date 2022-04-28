const { posts, users } = require('../../models');
module.exports = {
  allUser: (req, res) => {
    // 전체 유저 목록
    // 비번 솔트 업데이트 일을 제외한 모든 정보
  },
  allPost: (req, res) => {
    // 전체 컨텐츠 목록
    // 코멘트 처리 확인
  },
  findUser: (req, res) => {
    // 특정 유저 검색
  },
  findPost: (req, res) => {
    // 컨텐츠 특정 단어 검색
  },
  delUser: (req, res) => {
    // 특정 유저 탈퇴
  },
  delPost: (req, res) => {
    // 특정 컨텐츠 삭제
  },
};
// 어드민 계정을 로그인하면 어드민 주소로 보내는 방법
