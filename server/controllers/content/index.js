const { posts } = require('../../models');
module.exports = {
  write: async (req, res) => {
    // 컨텍츠 작성
    const { userid, title, content, category, done } = req.body;
    if (
      // user_id는 필수값 없으면 400 //db에서도 null안받게
      userid === undefined ||
      userid === '' ||
      title === undefined ||
      title === '' ||
      content === undefined ||
      content === '' ||
      category === undefined ||
      category === '' ||
      done === undefined ||
      done === ''
    ) {
      res.status(400).send({ message: 'Invalid request' });
    } else {
      await posts // User_id = 로그인 유저의 pk id 받음
        .create({ userid, title, content, category, done })
        .then((data) => {
          res.status(200).send({ message: 'post is saved' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    }
  },
  remove: async (req, res) => {
    // params :contentId?id=1
    // 컨텐츠 삭제
    // console.log(req.query);
    if (req.query.id) {
      // 파라미터가 없으면 400 있으면 200
      await posts
        .destroy({
          where: { id: req.query.id },
        })
        .then((data) => {
          // 게시글을 서택해서 삭제하는거니까 없는 id를 선택하는 경우가 없을까요?
          // 지금 포스트맨은 없는 아이디값 넣어도 삭제 성공했다고 나오게 되어있어서 고민중입니다
          res.status(200).send({ message: 'post delete' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    } else {
      res.status(400).send({ message: 'Invalid request' });
    }
  },
  update: async (req, res) => {
    // params
    // 컨텐츠 수정
    const { title, content, category, done } = req.body;
    if (req.query.id) {
      // 파라미터가 없으면 400 있으면 200
      if (
        title === undefined ||
        title === '' ||
        content === undefined ||
        content === '' ||
        category === undefined ||
        category === '' ||
        done === undefined ||
        done === ''
      ) {
        res.status(400).send({ message: 'Invalid request' });
      } else {
        await posts
          .update(
            {
              title,
              content,
              category,
            },
            {
              where: { id: req.query.id },
            },
          )
          .then((data) => {
            res.status(200).send({ message: 'post update' });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      }
    } else {
      res.status(400).send({ message: 'does not exist id' });
    }
  },
  donePost: (req, res) => {
    // 컨텐츠 문제 해결 완료
  },
  likePost: (req, res) => {
    // 컨텐츠 좋아요
  },
  unlikePost: (req, res) => {
    // 컨텐츠 좋아요 취소
  },
  post: (req, res) => {
    // 컨텐츠 작성정보 가져오기
  },
};
