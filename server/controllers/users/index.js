const { users, posts, like } = require('../../models');
const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../token');
const crypto = require('crypto');

module.exports = {
  login: async (req, res) => {
    // 로그인
    // 데이터 받아서, 디비 조회, 유저 정보로 토큰만들기,
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({ message: 'Invalid request' });
    } else {
      await users
        .findOne({
          where: { email },
        })
        .then((data) => {
          if (!data) {
            // db에 정보가 없을때
            res.status(409).send({ message: '존재하지 않는 유저 입니다.' });
          } else {
            // 토큰생성 및 쿠키로 전달
            // 보낼때 비번 정보 제외
            const dbPassword = data.dataValues.password;
            const salt = data.dataValues.salt;
            const hashPassword = crypto
              .createHash('sha512')
              .update(password + salt)
              .digest('hex');
            if (dbPassword === hashPassword) {
              const { id, username, profile, email } = data.dataValues;
              const accessToken = generateAccessToken({
                id,
                username,
                profile,
                email,
              });
              sendAccessToken(res, accessToken, {
                id,
                username,
                profile,
                email,
              });
            } else {
              res.status(400).send({ message: '비밀번호가 틀립니다' });
            }
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    }
  },
  logout: (req, res) => {
    // 로그아웃
    // 쿠키 정보 삭제
    res.status(200).clearCookie('jwt').send({ message: 'logout suceess' });
  },
  signup: async (req, res) => {
    // 회원가입
    //  디비 컬럼 추가하고, 있으면 거절
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).send({ message: 'Invalid request' });
    } else {
      const salt = Math.round(new Date().valueOf() * Math.random()) + '';
      const hashPassword = crypto
        .createHash('sha512')
        .update(password + salt)
        .digest('hex');
      await users
        .findOrCreate({
          where: { email },
          defaults: {
            username,
            password: hashPassword,
            salt: salt,
          },
        })
        .then(([result, created]) => {
          if (!created) {
            // 겹치는 이메일이 있는경우
            res.status(409).send({ message: 'e-mail already exists' });
          } else {
            res.status(201).send({ message: '회원가입 완료' });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    }
  },
  signout: async (req, res) => {
    // 회원탈퇴
    // 토큰 검증 한 내용으로 db 유저의 아이디 칼럼 destroy
    const verify = isAuthorized(req);
    if (!verify) {
      res.status(401).send({ message: 'Invalid Token' });
    } else {
      const { id, email } = verify;
      await users
        .destroy({
          where: { id, email },
        })
        .then((data) => {
          res
            .status(200)
            .clearCookie('jwt')
            .send({ message: 'delete user infomation & token' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    }
  },
  post: async (req, res) => {
    // 해당유저의 작성한 게시글 불러오기
    const verify = isAuthorized(req);
    if (verify) {
      const { userId } = req.params;
      if (userId) {
        await posts
          .findAll({
            where: { userId },
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
              'thumbnail',
              'description',
              'updatedAt',
              'stack',
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
        res.status(400).send({ message: 'invalid request' });
      }
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
  userInfo: async (req, res) => {
    // 유저 정보 변경
    const verify = isAuthorized(req);
    if (!verify) {
      res.status(401).send({ message: 'Invalid Token' });
    } else {
      const { email } = verify;
      const { username, profile } = req.body;
      await users
        .findOne({
          where: { email },
        })
        .then((data) => {
          if (data) {
            users
              .update(
                {
                  username,
                  profile,
                },
                {
                  where: { email },
                },
              )
              .then(() => {
                res.status(200).send({
                  message: 'user information changed',
                  data: { username, profile },
                });
              });
          } else {
            res.status(400).send({ message: '존재하지 않는 유저입니다.' });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    }
  },
  password: async (req, res) => {
    // 유저 비밀번호 변경 원래비번 바꿀 비번 들어옴 원래 비번이 맞으면 바꿀비번으로 바꿔줌
    const verify = isAuthorized(req);
    if (!verify) {
      res.status(401).send({ message: 'Invalid Token' });
    } else {
      const { email } = verify;
      const { newPassword } = req.body;
      const usreInfo = await users.findOne({ where: { email } });
      const { password, salt } = usreInfo;
      const original = req.body.password;
      const originalPassword = crypto
        .createHash('sha512')
        .update(original + salt)
        .digest('hex');
      if (password === originalPassword) {
        const newSalt = Math.round(new Date().valueOf() * Math.random()) + '';
        console.log(salt, newSalt);
        const hashPassword = crypto
          .createHash('sha512')
          .update(newPassword + newSalt)
          .digest('hex');
        await users
          .update(
            {
              password: hashPassword,
              salt: newSalt,
            },
            { where: { email } },
          )
          .then(() => {
            res.status(200).send({ message: 'password changed' });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      } else {
        res.status(400).send({ message: 'wrong password' });
      }
    }
  },
  auth: async (req, res) => {
    const verify = isAuthorized(req);
    if (verify) {
      const { id, username, email, profile } = verify;
      res
        .status(200)
        .send({ message: 'auth ok', data: { id, username, email, profile } });
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
};
