const {
  users,
  posts,
  like,
  post_comment,
  chattings,
  user_notification,
} = require('../../models');
const { isAuthorized } = require('../token');

module.exports = {
  write: async (req, res) => {
    // 컨텐츠 작성
    const verify = isAuthorized(req);
    if (verify) {
      const { userId, title, content, stack, thumbnail, description } =
        req.body;
      if (!title || !content || !stack || !description || !userId) {
        res.status(400).send({ message: 'Invalid request' });
      } else {
        await posts
          .create({
            userId,
            title,
            content,
            stack,
            thumbnail,
            description,
            in: true,
          })
          .then((data) => {
            res.status(200).send({
              message: 'post is saved',
              data: {
                done: data.dataValues.done,
                id: data.dataValues.id,
                userInfo: {
                  id: verify.id,
                  username: verify.username,
                  profile: verify.profile,
                },
                title: data.dataValues.title,
                stack: data.dataValues.stack,
                thumbnail: data.dataValues.thumbnail,
                description: data.dataValues.description,
                updatedAt: data.dataValues.updatedAt,
                in: data.dataValues.in,
                likers: [],
              },
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      }
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
  update: async (req, res) => {
    // 컨텐츠 수정
    const verify = isAuthorized(req);
    if (verify) {
      const { postId, title, content, stack, thumbnail, description } =
        req.body;
      if (postId) {
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
                in: true,
              },
              {
                where: { id: postId },
              },
            )
            .then(() => {
              res.status(200).send({
                message: 'post update',
                data: {
                  contentId: postId,
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
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
  remove: async (req, res) => {
    // 컨텐츠 삭제
    const verify = isAuthorized(req);
    if (verify) {
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
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
  donePost: async (req, res) => {
    // 컨텐츠 문제 해결 완료
    const verify = isAuthorized(req);
    if (verify) {
      const { postId } = req.params;
      if (postId) {
        await posts.update({ done: true }, { where: { id: postId } });
        res.status(200).send({ message: 'post done' });
      } else {
        res.status(400).send({ message: 'does not exist postId' });
      }
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
  likePost: async (req, res) => {
    // 컨텐츠 좋아요
    const verify = isAuthorized(req);

    if (verify) {
      // const { postId } = req.params;
      const { userId, postId } = req.body;

      if (postId && userId) {
        await like
          .findOrCreate({
            where: { postId: postId, userId: userId },
            defaults: {},
          })
          .then(([result, created]) => {
            if (!created) {
              res.status(400).send({ message: 'does not exist postId' });
            } else {
              res.status(200).send({ message: 'post like' });
            }
          });
      }
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
  unlikePost: async (req, res) => {
    // 컨텐츠 좋아요 취소
    const verify = isAuthorized(req);
    if (verify) {
      // const { postId } = req.params;
      const { userId, postId } = req.body;

      if (postId && userId) {
        await like.destroy({ where: { postId: postId, userId: userId } });
        res.status(200).send({ message: 'post unlike' });
      } else {
        res.status(400).send({ message: 'does not exist postId' });
      }
    } else {
      res.status(401).send({ message: 'Invalid Token' });
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
              attributes: ['id', 'userId', 'content', 'image', 'time', 'code'],
              include: [
                {
                  model: users,
                  attributes: ['username', 'profile'],
                },
              ],
            },
          ],
          order: [
            [{ model: post_comment, as: 'comments' }, 'id', 'DESC'],
            [{ model: chattings }, 'id', 'ASC'],
          ],
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
    const verify = isAuthorized(req);
    if (verify) {
      const { userId, comment, postId, postUserId, postTitle } = req.body;
      if (!postId || !comment || !userId) {
        res.status(400).send({ message: 'Invalid request' });
      } else {
        await post_comment
          .create({
            userId,
            comment,
            postId,
          })
          .then(async (data) => {
            // 코멘트 알림 추가
            await user_notification.create({
              userId: userId,
              postUserId,
              type: 'comment',
              title: postTitle,
              postId: postId,
            });
            res.status(200).send({
              message: 'comment is saved',
              data: {
                commentId: data.id,
                comment,
                createdAt: data.createdAt,
                postId,
                userId,
              },
            });
          });
      }
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
  commentR: async (req, res) => {
    // 댓글 삭제
    const verify = isAuthorized(req);
    if (verify) {
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
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
};
