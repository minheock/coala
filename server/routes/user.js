const express = require('express');
const {
  login,
  logout,
  signup,
  signout,
  post,
  userInfo,
  password,
  auth,
} = require('../controllers/users');
/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

const router = express.Router();

router.post('/login', login); // 로그인 요청
router.post('/logout', logout); // 로그아웃 요청
router.post('/signup', signup); // 회원가입 요청
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
 *                    example: 성공
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript","thumbnail": "test", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript","thumbnail": "test", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript","thumbnail": "test", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
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
 *      parameters:
 *      - name: token
 *        in: header
 *        description: token
 *        schema:
 *          type: string
 *        examples:
 *          sample:
 *            value: example
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
 *          description: 파라미터 에러
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 존재하지 않는 유저입니다.
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
 *      parameters:
 *      - name: token
 *        in: header
 *        description: token
 *        schema:
 *          type: string
 *        examples:
 *          sample:
 *            value: example
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
 *
 */
router.patch('/password', password); // 마이페이지에서 비밀번호 변경 요청
/**
 * @swagger
 *  /user/auth:
 *    get:
 *      summary: 마이페이지에서 비밀번호 변경 요청
 *      tags: [User]
 *      parameters:
 *      - name: token
 *        in: header
 *        description: token
 *        schema:
 *          type: string
 *        examples:
 *          sample:
 *            value: example
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
 *                    example: password changed
 *        "400":
 *          description:
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
router.get('/auth', auth);
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
 *          description: 로그인 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid request
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
 *        "400":
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
module.exports = router;
