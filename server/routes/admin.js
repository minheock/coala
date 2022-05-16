const express = require('express');
const { allUser, findUser, delPost, delUser } = require('../controllers/admin');
/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management
 */
const router = express.Router();

router.get('/user', allUser); // 전체 유저 조회
router.get('/:user', findUser); // 특정 유저 검색
router.delete('/userId/:id', delUser); // 특정 유저 삭제
router.delete('/contentId/:id', delPost); // 특정 컨텐츠 삭제
/**
 * @swagger
 *  /admin/user:
 *    get:
 *      summary: 전체 유저 목록
 *      tags: [Admin]
 *      responses:
 *        "200":
 *          description: 요청 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 요청 성공
 *                  userInfo:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 1, "username": "test1", "profile": "test1", "email": "test1@coala.com","admin": true,"createdAt": "20xx-xx-xx xx:xx:xx"},
 *                        { "id": 2, "username": "test2", "profile": "test2", "email": "test2@coala.com","admin": false,"createdAt": "20xx-xx-xx xx:xx:xx"},
 *                        { "id": 3, "username": "test3", "profile": "test3", "email": "test3@coala.com","admin": false,"createdAt": "20xx-xx-xx xx:xx:xx"},
 *                      ]
 * @swagger
 *  /admin/{user}:
 *    get:
 *      summary: 특정 유저 검색
 *      tags: [Admin]
 *      parameters:
 *      - in: path
 *        name: user
 *        required: true
 *        description: 유저 이메일 또는 네임
 *        schema:
 *          type: string
 *          example: test
 *      responses:
 *        "200":
 *          description: 요청 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 요청 성공
 *                  userInfo:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 1, "username": "test1", "profile": "test1", "email": "test1@coala.com","admin": true,"createdAt": "20xx-xx-xx xx:xx:xx"},
 *                      ]
 * @swagger
 *  /admin/userId/{id}:
 *    delete:
 *      summary: 특정 유저 탈퇴
 *      tags: [Admin]
 *      parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: 유저 번호
 *        schema:
 *          type: integer
 *          example: 1
 *      responses:
 *        "200":
 *          description: 요청 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 요청 성공
 * @swagger
 *  /admin/contentId/{id}:
 *    delete:
 *      summary: 특정 컨텐츠 삭제
 *      tags: [Admin]
 *      parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: 컨텐츠 번호
 *        schema:
 *          type: integer
 *          example: 1
 *      responses:
 *        "200":
 *          description: 요청 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 요청 성공
 */

module.exports = router;
