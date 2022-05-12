require('dotenv').config();
const { users, user_notification, posts } = require('../../models');
const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../token');
const crypto = require('crypto');
const axios = require('axios');
const { Op } = require('sequelize');
const sequelize = require('sequelize');

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
              const { id, username, profile, email, admin } = data.dataValues;
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
                admin,
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
    const verify = isAuthorized(req);
    if (verify) {
      posts.update(
        { in: false },
        {
          where: { userId: verify.id },
        },
      );
    }
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
  userInfo: async (req, res) => {
    // 유저 정보 변경
    const verify = isAuthorized(req);
    if (!verify) {
      res.status(401).send({ message: 'Invalid Token' });
    } else {
      const { id, email } = verify;
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
      const userInfo = await users.findOne({ where: { email } });
      const { password, salt } = userInfo;
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
  logingithub: async (req, res) => {
    // 클라에서 받아온 깃헙 인가코드를
    // 서버에서 받아 깃헙 토큰 교환 요청후
    // 깃헙 API 로 유저정보 받아서
    // 코알라 디비에 정보넣고 코알라 토큰 생성후 클라로 보내줌
    const authCode = req.body.authorizationCode;
    // console.log('인가코드', authCode);
    await axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token`,
      headers: { Accept: 'application/json' },
      data: {
        client_id: process.env.GITHUB_CLIENT_ID,
        // 절대 비공개! 서버에서만 써야함
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: authCode,
      },
    }).then(async (result) => {
      const accessToken = result.data.access_token;
      const gitUser = await axios({
        method: 'get',
        url: 'https://api.github.com/user',
        headers: {
          authorization: `token ${accessToken}`,
        },
      });
      // console.log('!!!!', gitUser);
      const { login, id, node_id, avatar_url } = gitUser.data;
      const salt = Math.round(new Date().valueOf() * Math.random()) + '';
      const hashPassword = crypto
        .createHash('sha512')
        .update(node_id + salt)
        .digest('hex');

      await users
        .findOrCreate({
          where: { email: `${id}@coala.com` },
          defaults: {
            username: login,
            profile: avatar_url,
            password: hashPassword,
            salt: salt,
          },
        })
        .then(([result, created]) => {
          if (!created) {
            // 겹치는 이메일이 있는경우
            const { id, username, profile, email } = result.dataValues;
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
            const { id, username, profile, email } = result.dataValues;
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
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500);
        });
    });
  },
  alarm: async (req, res) => {
    const verify = isAuthorized(req);
    if (verify) {
      const { id } = verify;
      const comment = [];
      const chat = [];
      const date = [];
      await user_notification
        .findAll({
          where: {
            postUserId: id,
            [Op.not]: [
              {
                userId: id,
              },
            ],
            type: 'chat',
            readAt: 0,
          },
          attributes: [
            [sequelize.fn('COUNT', sequelize.col('type')), 'count'],
            'title',
            'postId',
          ],
          group: ['title', 'postId'],
          raw: true,
        })
        .then(async (data) => {
          chat.push(data);
          await user_notification.update(
            { check: new Date(Date.now()) },
            {
              where: {
                postUserId: id,
                [Op.not]: [
                  {
                    userId: id,
                  },
                ],
                type: 'chat',
                readAt: 0,
              },
            },
          );
        });
      await user_notification
        .findAll({
          where: {
            postUserId: id,
            [Op.not]: [
              {
                userId: id,
              },
            ],
            type: 'comment',
            readAt: 0,
          },
          attributes: [
            [sequelize.fn('COUNT', sequelize.col('type')), 'count'],
            'title',
            'postId',
          ],
          group: ['title', 'postId'],
          raw: true,
        })
        .then(async (data) => {
          comment.push(data);
          await user_notification
            .update(
              { check: new Date(Date.now()) },
              {
                where: {
                  postUserId: id,
                  [Op.not]: [
                    {
                      userId: id,
                    },
                  ],
                  type: 'comment',
                  readAt: 0,
                },
              },
            )
            .then((data) => date.push(new Date(Date.now())));
        });
      // console.log(date);
      // console.log(comment);
      // console.log(chat);
      res.status(200).send({ comment, chat, date });
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
  readAlarm: async (req, res) => {
    const verify = isAuthorized(req);
    if (verify) {
      const { postId, check, type } = req.body;
      await user_notification
        .update(
          { readAt: true },
          {
            where: {
              postId: postId,
              check: check,
              type: type,
            },
            raw: true,
          },
        )
        .then((data) => console.log(data));
      res.status(200).send({ message: 'read ok' });
    } else {
      res.status(401).send({ message: 'Invalid Token' });
    }
  },
};
