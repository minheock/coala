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
/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

const router = express.Router();

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
 *                   description: ""
 *                password:
 *                   type: string
 *                   description: ""
 *      responses:
 *        "200":
 *          description: token return
 *          headers:
 *            Set-Cookie:
 *              schem:
 *                type: string
 *        "400":
 *          description: 존재하지 않는 유저 입니다.
 */
router.post('/login', login); // 로그인 요청
/**
 * @swagger
 *  /user/logout:
 *    post:
 *      summary: 로그아웃
 *      tags: [User]
 *      responses:
 *        "200":
 *          description: logout suceess
 */
router.post('/logout', logout); // 로그아웃 요청
/**
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
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "201":
 *          description: 회원가입 완료
 *        "400":
 *          description: e-mail already exists
 */
router.post('/signup', signup); // 회원가입 요청
/**
 * @swagger
 *  /user/signout:
 *    post:
 *      summary: 회원탈퇴
 *      tags: [User]
 *      responses:
 *        "200":
 *          description: delete user infomation & token
 */
router.delete('/signout', signout); // 회원탈퇴 요청
/**
 * @swagger
 *  /user/contents:
 *    get:
 *      summary: 로그인한 유저가 작성한 컨텐츠 요청
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user_id:
 *                   type: string
 *                   description: ""
 *      responses:
 *        "200":
 *          description: 요청 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "content_name": "js", "content_body": "hellow world", "category":"javascript" },
 *                        { "id": 2, "content_name": "js", "content_body": "hellow world", "category":"javascript" },
 *                        { "id": 1, "content_name": "js", "content_body": "hellow world", "category":"javascript" },
 *                      ]
 *        "400":
 *          description: 파라미터 에러
 */
router.get('/contents', post); // 마이페이지에서 유저가 작성한 컨텐츠 요청
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
 *                email:
 *                   type: string
 *                   description: ""
 *                username:
 *                   type: string
 *                   description: ""
 *                profile:
 *                   type: string
 *                   description: ""
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
 *          description: 파라미터 에러
 */
router.patch('/userInfo', userInfo); // 마이페이지에서 유저 정보 변경 요청
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
 *                email:
 *                   type: string
 *                   description: ""
 *                password:
 *                   type: string
 *                   description: ""
 *                newpassword:
 *                   type: string
 *                   description: ""
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
 *
 */
router.patch('/password', password); // 마이페이지에서 비밀번호 변경 요청

module.exports = router;
