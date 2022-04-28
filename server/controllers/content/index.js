const {
  users,
  posts,
  like,
  chatrooms,
  post_comment,
  chattings,
} = require('../../models');
module.exports = {
  write: async (req, res) => {
    // 컨텐츠 작성
    const { userId, title, content, stack, thumbnail, description } = req.body;
    if (!title || !content || !stack || !description || !userId) {
      res.status(400).send({ message: 'Invalid request' });
    } else {
      await chatrooms.create({ userId });
      await posts
        .create({
          userId,
          title,
          content,
          stack,
          thumbnail,
          description,
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
  update: async (req, res) => {
    // 컨텐츠 수정
    const { title, content, stack, thumbnail, description } = req.body;
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
              thumbnail,
              description,
            },
            {
              where: { id: req.params.postId },
            },
          )
          .then((data) => {
            res.status(200).send({
              message: 'post update',
              data: {
                contentId: data[0],
              },
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      }
    } else {
      res.status(400).send({ message: 'does not exist postId' });
    }
  },
  remove: async (req, res) => {
    // 컨텐츠 삭제
    if (req.params.postId) {
      // 파라미터가 없으면 400 있으면 200
      await posts
        .destroy({
          where: { id: req.params.postId },
        })
        .then(() => {
          res.status(200).send({ message: 'post delete' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    } else {
      res.status(400).send({ message: 'does not exist postId' });
    }
  },
  donePost: async (req, res) => {
    // 컨텐츠 문제 해결 완료
    const { postId } = req.params;
    if (postId) {
      await posts.update({ done: true }, { where: { id: postId } });
      res.status(200).send({ message: 'post done' });
    } else {
      res.status(400).send({ message: 'does not exist postId' });
    }
  },
  likePost: async (req, res) => {
    // 컨텐츠 좋아요
    const { postId } = req.params;
    const { userId } = req.body;

    if (!postId || !userId) {
      await like.create({ postId: postId, userId: userId });
      res.status(200).send({ message: 'post like' });
    } else {
      res.status(400).send({ message: 'does not exist postId' });
    }
  },
  unlikePost: async (req, res) => {
    // 컨텐츠 좋아요 취소
    const { postId } = req.params;
    const { userId } = req.body;

    if (!postId || !userId) {
      await like.destroy({ where: { postId: postId, userId: userId } });
      res.status(200).send({ message: 'post unlike' });
    } else {
      res.status(400).send({ message: 'does not exist postId' });
    }
  },
  post: async (req, res) => {
    // 컨텐츠 디테일 정보 가져오기
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
            {
              model: chattings,
              attributes: ['userId', 'content'],
              include: [
                {
                  model: users,
                  attributes: ['username', 'profile'],
                },
              ],
            },
          ],
          order: [[{ model: post_comment, as: 'comments' }, 'id', 'DESC']],
        })
        .then(async (data) => {
          // const post = [data].map((el) => el.get({ plain: true }));
          // for (let i = 0; i < post[0].likers.length; i++) {
          //   post[0].likers[i] = post[0].likers[i].userId;
          // }
          data.dataValues.likers = data.dataValues.likers.map((el) => {
            el = el.userId;
            return el;
          });
          res.status(200).send({
            message: '요청 성공',
            data: data.dataValues,
          });
        });
    } else {
      // 예외 처리 다시 확인할것
      res.status(400).send({ message: 'Invalid request' });
    }
  },
  comment: async (req, res) => {
    // 댓글 작성
    console.log(1111);
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
          res.status(200).send({
            message: 'comment is saved',
            data: { commentId: data.id },
          });
        });
    }
  },
  commentR: async (req, res) => {
    // 댓글 삭제
    const { userId, postId } = req.body;
    const { commentId } = req.params;
    if (!postId || !userId) {
      res.status(400).send({ message: 'Invalid request' });
    } else {
      await post_comment
        .destroy({ where: { userId, postId, id: commentId } })
        .then((data) => {
          if (data) {
            res.status(200).send({ message: 'comment delete' });
          } else {
            res.status(409).send({ message: '요청 실패' });
          }
        });
    }
  },
};
