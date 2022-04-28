const express = require('express');
const {
  allPost,
  filterPost,
  scrollPost,
  findPost,
  findDone,
  findUndone,
} = require('../controllers/contents');

/**
 * @swagger
 * tags:
 *   name: Contents
 *   description: Contents management
 */

const router = express.Router();

router.get('/', allPost); // 모든컨텐츠 가져오기
router.get('/:stack', filterPost); // 스택별로 필터링해서 컨텐츠 가져오기.
router.get('/:lastId', scrollPost); // 무한스크롤 시 마지막 아이디 보내서 나머지 컨텐츠 요청
router.get('/:keyword', findPost); // 키워드로 컨텐츠 검색
router.get('/done', findDone); // 해결완료만 필터
router.get('/undone', findUndone); // 미해결만 필터
/**
 * @swagger
 *  /contents:
 *    get:
 *      summary: 모든컨텐츠 가져오기
 *      tags: [Contents]
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */
/**
 * @swagger
 *  /contents?stack={stack}:
 *    get:
 *      summary: 스택별로 필터링해서 컨텐츠 가져오기
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: stack
 *        required: true
 *        description: 스택 종류
 *        schema:
 *          type: string
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */
/**
 * @swagger
 *  /contents?lastId={lastId}:
 *    get:
 *      summary: 무한스크롤 시 마지막 아이디 보내서 나머지 컨텐츠 요청
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: lastId
 *        required: true
 *        description: 마지막 컨텐츠 아이디
 *        schema:
 *          type: string
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */
/**
 * @swagger
 *  /contents?keyword={keyword}:
 *    get:
 *      summary: 키워드로 컨텐츠 검색
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: keyword
 *        required: true
 *        description: 검색 키워드
 *        schema:
 *          type: string
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */
/**
 * @swagger
 *  /contents/done:
 *    get:
 *      summary: 해결완료 컨텐츠 검색
 *      tags: [Contents]
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": true, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": true, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": true, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */
/**
 * @swagger
 *  /contents/undone:
 *    get:
 *      summary: 미해결 컨텐츠 검색
 *      tags: [Contents]
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */

module.exports = router;
