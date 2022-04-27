const { users, posts, like, chatrooms, post_comment } = require('../../models');
module.exports = {
  write: async (req, res) => {
    // 컨텍츠 작성
    const { userId, title, content, stack, thumbnail, description } = req.body;
    if (!title || !content || !stack || !description || !userId) {
      res.status(400).send({ message: 'Invalid request' });
    } else {
      const chatroom = await chatrooms.create({ userId });
      await posts
        .create({
          userId,
          title,
          content,
          stack,
          thumbnail,
          description,
          chatroomId: chatroom.dataValues.id,
        })
        .then((data) => {
          res.status(200).send({
            message: 'post is saved',
            data: { contentId: data.dataValues.id },
          });
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
    if (req.params.postId) {
      // 파라미터가 없으면 400 있으면 200
      await posts
        .destroy({
          where: { id: req.params.postId },
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
    const { title, content, stack } = req.body;
    if (req.params.postId) {
      // 파라미터가 없으면 400 있으면 200
      if (!title || !content || !stack) {
        res.status(400).send({ message: 'Invalid request' });
      } else {
        await posts
          .update(
            {
              title,
              content,
              stack,
            },
            {
              where: { id: req.params.postId },
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
  donePost: async (req, res) => {
    // 컨텐츠 문제 해결 완료
    const { postId } = req.params;
    if (postId) {
      await posts.update({ done: true }, { where: { id: postId } });
      res.status(200).send({ message: 'post done' });
    } else {
      res.status(400).send({ message: 'does not exist id' });
    }
  },
  likePost: async (req, res) => {
    // 컨텐츠 좋아요
    const { postId } = req.params;
    const { userId } = req.body;

    if (!postId || !userId) {
      await like.create({ postId: postId, userId: userId });
      res.send();
    }
  },
  unlikePost: async (req, res) => {
    // 컨텐츠 좋아요 취소
    const { postId } = req.params;
    const { userId } = req.body;

    if (!postId || !userId) {
      await like.destroy({ where: { postId: postId, userId: userId } });
      res.send();
    }
  },
  post: async (req, res) => {
    // 컨텐츠 작성정보 가져오기
    const { postId } = req.params;
    if (postId) {
      await posts
        .findOne({
          where: { id: postId },
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
            // 코멘트 뒤집어서
            {
              model: post_comment,
              as: 'comments',
              attributes: ['postId', 'userId', 'comment', 'createdAt'],
              include: [
                {
                  model: users,
                  as: 'userinfo',
                  required: true,
                  attributes: ['username', 'profile'],
                },
              ],
            },
          ],
          order: [[{ model: post_comment, as: 'comments' }, 'id', 'DESC']],
        })
        .then((data) => {
          // const post = [data].map((el) => el.get({ plain: true }));
          // for (let i = 0; i < post[0].likers.length; i++) {
          //   post[0].likers[i] = post[0].likers[i].userId;
          // }
          data.dataValues.likers = data.dataValues.likers.map((el) => {
            el = el.userId;
            return el;
          });
          // console.log(data.dataValues);
          res.status(200).send({ message: '요청 성공', data: data.dataValues });
        });
    } else {
      // 예외 처리 다시 확인할것
      res.status(400).send({ message: 'Invalid request' });
    }
  },
  comment: async (req, res) => {
    // 댓글 작성
    const { userId, comment, postId } = req.body;
    if (!postId || !comment || !userId) {
      res.status(400).send({ message: 'Invalid request' });
    } else {
      await post_comment
        .create({
          userId,
          comment,
          postId,
        })
        .then((data) => {
          res
            .status(200)
            .send({ message: 'comment is saved', data: { commentId: data } });
        });
    }
  },
  commentRemove: async (req, res) => {
    // 댓글 삭제
    // 작성한 유저의 경우에만 삭제 가능
    // 유저 아이디랑 코멘트아이디를
  },
};
