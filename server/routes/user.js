const express = require('express');
const {
  login,
  logingithub,
  logout,
  signup,
  signout,
  userInfo,
  password,
  auth,
  alarm,
  readAlarm,
} = require('../controllers/users');
/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

const router = express.Router();

router.post('/login', login); // 로그인 요청
router.post('/logingithub', logingithub); // 깃허브
router.post('/logout', logout); // 로그아웃 요청
router.post('/signup', signup); // 회원가입 요청
router.delete('/signout', signout); // 회원탈퇴 요청
router.patch('/userInfo', userInfo); // 마이페이지에서 유저 정보 변경 요청
router.patch('/password', password); // 마이페이지에서 비밀번호 변경 요청
router.get('/auth', auth); // 새로고침시에 유저 정보 요청
router.get('/alarm', alarm); // 로그인시 알람 보내기
router.patch('/alarm', readAlarm); // 알람 확인 요청
/**
 * @swagger
 *  /user/login:
 *    post:
 *      summary: 로그인
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                   type: string
 *                   example: test1@coala.com
 *                password:
 *                   type: string
 *                   example: 1111
 *      responses:
 *        "200":
 *          description: 로그인 성공
 *          headers:
 *            jwt:
 *              schema:
 *                type: string
 *              description: accesToken
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: token return
 *        "400":
 *          description: 비밀 번호가 틀린 경우 또는 파라미터 부족으로 인한 로그인 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 비밀번호가 틀립니다 또는 'Invalid request'
 *        "409":
 *          description: 이메일이 디비에 없는 경우
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 존재하지 않는 유저 입니다.
 *
 * @swagger
 *  /user/logout:
 *    post:
 *      summary: 로그아웃
 *      tags: [User]
 *      responses:
 *        "200":
 *          description: 로그아웃 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: logout suceess
 * @swagger
 *  /user/signup:
 *    post:
 *      summary: 회원가입
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                   type: string
 *                   example: test@coala.com
 *                username:
 *                   type: string
 *                   example: coala
 *                password:
 *                   type: string
 *                   example: 1111
 *      responses:
 *        "201":
 *          description: 회원가입 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 회원가입 완료
 *        "400":
 *          description: 파라미터 부족 회원가입 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid request
 *        "409":
 *          description: 회원가입 실패(이미 존재하는 이메일)
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: e-mail already exists
 * @swagger
 *  /user/signout:
 *    delete:
 *      summary: 회원탈퇴
 *      tags: [User]
 *      parameters:
 *      - name: token
 *        in: header
 *        description: token
 *        schema:
 *          type: string
 *        examples:
 *          sample:
 *            value: token
 *            summary: A sample token
 *      responses:
 *        "200":
 *          description: 회원탈퇴 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: delete user infomation & token
 *        "401":
 *          description: 토큰이 유효하지 않는 경우
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid Token
 */
/**
/**
 * @swagger
 *  /user/userInfo:
 *    patch:
 *      summary: 마이페이지에서 유저 정보 변경 요청
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                   type: string
 *                   example: coala
 *                profile:
 *                   type: string
 *                   example: test
 *      parameters:
 *      - name: token
 *        in: header
 *        description: token
 *        schema:
 *          type: string
 *        examples:
 *          sample:
 *            value: token
 *            summary: A sample token
 *      responses:
 *        "200":
 *          description: 유저 정보 변경 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: user information changed
 *        "400":
 *          description: 존재하지 않는 email 일때
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 존재하지 않는 유저입니다.
 *        "401":
 *          description: 유효하지 않은 토큰일때
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid Token
 */
/**
 * @swagger
 *  /user/password:
 *    patch:
 *      summary: 마이페이지에서 비밀번호 변경 요청
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                password:
 *                   type: string
 *                   example: 1111
 *                newPassword:
 *                   type: string
 *                   example: 1234
 *      parameters:
 *      - name: token
 *        in: header
 *        description: token
 *        schema:
 *          type: string
 *        examples:
 *          sample:
 *            value: token
 *            summary: A sample token
 *      responses:
 *        "200":
 *          description: 비밀번호 변경 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: password changed
 *        "400":
 *          description: password 불일치
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: wrong password
 *        "401":
 *          description: 유효하지 않은 토큰일때
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid Token
 */
/**
 * @swagger
 *  /user/auth:
 *    get:
 *      summary: 새로고침시에 유저 정보 요청
 *      tags: [User]
 *      parameters:
 *      - name: token
 *        in: header
 *        description: token
 *        schema:
 *          type: string
 *        examples:
 *          sample:
 *            value: token
 *            summary: A sample token
 *      responses:
 *        "200":
 *          description:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: auth ok
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "username": "John", "email": "test1@coala.com", "profile": "https://joeschmoe.io/api/v1/random" }
 *                      ]
 *        "401":
 *          description:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid Token
 */
/**
 * @swagger
 *  /user/logingithub:
 *    post:
 *      summary: 깃허브 로그인
 *      tags: [User]
 * @swagger
 *  /user/alarm:
 *    get:
 *      summary: 로그인시 알람 보내기
 *      tags: [User]
 *      responses:
 *        "200":
 *          description:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  comment:
 *                    type: string
 *                    example: [
 *                               [{ count: 3, title: test, postId: 1}]
 *                             ]
 *                  chat:
 *                    type: string
 *                    example: [
 *                               [{ count: 3, title: test, postId: 1}]
 *                             ]
 *                  date:
 *                    type: string
 *                    example: ["2022-xx-xxTxx:xx:xx.xxxZ"]
 *        "401":
 *          description:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid Token
 * @swagger
 *  /user/alarm:
 *    patch:
 *      summary: 알람 확인 요청
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                postId:
 *                   type: integer
 *                   example: 1
 *                check:
 *                   type: string
 *                   example: ["2022-xx-xxTxx:xx:xx.xxxZ"]
 *                type:
 *                   type: string
 *                   example: "comment"
 *      responses:
 *        "200":
 *          description:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: read ok
 *        "401":
 *          description:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid Token
 */
module.exports = router;
