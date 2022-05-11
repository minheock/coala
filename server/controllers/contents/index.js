const { posts, like, users, Sequelize } = require('../../models');
const { isAuthorized } = require('../token');
const Op = Sequelize.Op;

module.exports = {
  allPost: async (req, res) => {
    // 모든 컨텐츠 정보 불러오기
    const { lastId } = req.query;
    if (!lastId) {
      await posts
        .findAll({
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
          ],
          attributes: [
            'id',
            'title',
            'description',
            'updatedAt',
            'stack',
            'thumbnail',
            'done',
            'in',
          ],
          order: [['id', 'DESC']],
          limit: 8,
        })
        .then((data) => {
          const post = data.map((el) => el.get({ plain: true }));
          for (let i = 0; i < post.length; i++) {
            if (post[i].likers) {
              for (let q = 0; q < post[i].likers.length; q++) {
                post[i].likers[q] = post[i].likers[q].userId;
              }
            }
          }
          res.status(200).send({ message: '요청 성공', data: post });
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    } else {
      await posts
        .findAll({
          where: { id: { [Op.lt]: lastId } },
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
          ],
          attributes: [
            'id',
            'title',
            'description',
            'updatedAt',
            'stack',
            'thumbnail',
            'done',
            'in',
          ],
          order: [['id', 'DESC']],
          limit: 8,
        })
        .then((data) => {
          const post = data.map((el) => el.get({ plain: true }));
          for (let i = 0; i < post.length; i++) {
            if (post[i].likers) {
              for (let q = 0; q < post[i].likers.length; q++) {
                post[i].likers[q] = post[i].likers[q].userId;
              }
            }
          }
          res.status(200).send({ message: '요청 성공', data: post });
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    }
  },
  filterPost: async (req, res) => {
    // 스택, 단어 검색, 해결 분류 요청 불러오기
    const filter = Object.keys(req.query)[0];
    // console.log(filter, req.query);
    // console.log(Object.keys(req.query).length);
    if (Object.keys(req.query).length === 1) {
      if (filter === 'stack') {
        await posts
          .findAll({
            where: req.query,
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
            ],
            attributes: [
              'id',
              'title',
              'description',
              'updatedAt',
              'stack',
              'thumbnail',
              'done',
              'in',
            ],
            order: [['id', 'DESC']],
            limit: 8,
          })
          .then((data) => {
            const post = data.map((el) => el.get({ plain: true }));
            for (let i = 0; i < post.length; i++) {
              if (post[i].likers) {
                for (let q = 0; q < post[i].likers.length; q++) {
                  post[i].likers[q] = post[i].likers[q].userId;
                }
              }
            }
            res.status(200).send({ message: '요청 성공', data: post });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      } else if (filter === 'keyword') {
        console.log(req.query.keyword);
        await posts
          .findAll({
            where: {
              [Op.or]: [
                { title: { [Op.like]: `%${req.query.keyword}%` } },
                { content: { [Op.like]: `%${req.query.keyword}%` } },
              ],
            },
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
            ],
            attributes: [
              'id',
              'title',
              'description',
              'updatedAt',
              'stack',
              'thumbnail',
              'done',
              'in',
            ],
            order: [['id', 'DESC']],
            limit: 8,
          })
          .then((data) => {
            const post = data.map((el) => el.get({ plain: true }));
            for (let i = 0; i < post.length; i++) {
              if (post[i].likers) {
                for (let q = 0; q < post[i].likers.length; q++) {
                  post[i].likers[q] = post[i].likers[q].userId;
                }
              }
            }
            res.status(200).send({ message: '요청 성공', data: post });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      } else if (filter === 'done') {
        await posts
          .findAll({
            where: { done: req.query.done },
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
            ],
            attributes: [
              'id',
              'title',
              'description',
              'updatedAt',
              'stack',
              'thumbnail',
              'done',
            ],
            order: [['id', 'DESC']],
            limit: 8,
          })
          .then((data) => {
            const post = data.map((el) => el.get({ plain: true }));
            for (let i = 0; i < post.length; i++) {
              if (post[i].likers) {
                for (let q = 0; q < post[i].likers.length; q++) {
                  post[i].likers[q] = post[i].likers[q].userId;
                }
              }
            }
            res.status(200).send({ message: '요청 성공', data: post });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      }
    } else {
      const { lastId } = req.query;
      console.log(lastId);
      if (filter === 'stack') {
        await posts
          .findAll({
            where: { stack: req.query.stack, id: { [Op.lt]: lastId } },
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
            ],
            attributes: [
              'id',
              'title',
              'description',
              'updatedAt',
              'stack',
              'thumbnail',
              'done',
              'in',
            ],
            order: [['id', 'DESC']],
            limit: 8,
          })
          .then((data) => {
            const post = data.map((el) => el.get({ plain: true }));
            for (let i = 0; i < post.length; i++) {
              if (post[i].likers) {
                for (let q = 0; q < post[i].likers.length; q++) {
                  post[i].likers[q] = post[i].likers[q].userId;
                }
              }
            }
            res.status(200).send({ message: '요청 성공', data: post });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      } else if (filter === 'keyword') {
        console.log(req.query.keyword);
        await posts
          .findAll({
            where: {
              [Op.or]: [
                { title: { [Op.like]: `%${req.query.keyword}%` } },
                { content: { [Op.like]: `%${req.query.keyword}%` } },
              ],
              id: { [Op.lt]: lastId },
            },
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
            ],
            attributes: [
              'id',
              'title',
              'description',
              'updatedAt',
              'stack',
              'thumbnail',
              'done',
            ],
            order: [['id', 'DESC']],
            limit: 8,
          })
          .then((data) => {
            const post = data.map((el) => el.get({ plain: true }));
            for (let i = 0; i < post.length; i++) {
              if (post[i].likers) {
                for (let q = 0; q < post[i].likers.length; q++) {
                  post[i].likers[q] = post[i].likers[q].userId;
                }
              }
            }
            res.status(200).send({ message: '요청 성공', data: post });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      } else if (filter === 'done') {
        await posts
          .findAll({
            where: { done: req.query.done, id: { [Op.lt]: lastId } },
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
            ],
            attributes: [
              'id',
              'title',
              'description',
              'updatedAt',
              'stack',
              'thumbnail',
              'done',
            ],
            order: [['id', 'DESC']],
            limit: 8,
          })
          .then((data) => {
            const post = data.map((el) => el.get({ plain: true }));
            for (let i = 0; i < post.length; i++) {
              if (post[i].likers) {
                for (let q = 0; q < post[i].likers.length; q++) {
                  post[i].likers[q] = post[i].likers[q].userId;
                }
              }
            }
            res.status(200).send({ message: '요청 성공', data: post });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      }
    }
  },
  myPost: async (req, res) => {
    const verify = isAuthorized(req);
    console.log(verify);
    const { id } = verify;
    if (verify) {
      await posts
        .findAll({
          where: { userId: id },
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
          ],
          attributes: [
            'id',
            'title',
            'description',
            'updatedAt',
            'stack',
            'thumbnail',
            'done',
          ],
          order: [['id', 'DESC']],
        })
        .then((data) => {
          const post = data.map((el) => el.get({ plain: true }));
          for (let i = 0; i < post.length; i++) {
            if (post[i].likers) {
              for (let q = 0; q < post[i].likers.length; q++) {
                post[i].likers[q] = post[i].likers[q].userId;
              }
            }
          }
          res.status(200).send({ message: '요청 성공', data: post });
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    } else {
      res.ststus(400).send({ message: 'Invalid Token' });
    }
  },
};
