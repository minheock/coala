const express = require('express');
const { allPost, filterPost, myPost } = require('../controllers/contents');

/**
 * @swagger
 * tags:
 *   name: Contents
 *   description: Contents management
 */

const router = express.Router();

router.get('/', allPost); // 모든컨텐츠 가져오기
router.get('/filter', filterPost); // 스택, 키워드검색 등 필터링해서 컨텐츠 가져오기
router.get('/mypost', myPost); // 로그인한 유저 본인 작성 게시물 가져오기
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
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 * @swagger
 *  /contents?lastId={lastId}:
 *    get:
 *      summary: 모든컨텐츠 무한스크롤 요청
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: lastId
 *        required: true
 *        description: 마지막 컨텐츠 아이디
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in": false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */
/**
 * @swagger
 *  /contents/filter?stack={stack}:
 *    get:
 *      summary: 스택 분류 요청 불러오기
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: stack
 *        required: true
 *        description: 스택 종류
 *        schema:
 *          type: string
 *          example: Javascript
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
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 * @swagger
 *  /contents/filter?stack={stack}&lastId={lastId}:
 *    get:
 *      summary: 스택 분류 무한 스크롤 요청
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: stack
 *        required: true
 *        description: 스택 종류
 *        schema:
 *          type: string
 *          example: Javascript
 *      - in: query
 *        name: lastId
 *        required: true
 *        description: 마지막 컨텐츠 번호
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */
/**
 * @swagger
 *  /contents/filter?keyword={keyword}:
 *    get:
 *      summary: 키워드로 컨텐츠 검색
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: keyword
 *        required: true
 *        description: 키워드
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */
/**
 * @swagger
 *  /contents/filter?keyword={keyword}&lastId={lastId}:
 *    get:
 *      summary: 키워드로 컨텐츠 검색 무한 스크롤 요청
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: keyword
 *        required: true
 *        description: 키워드
 *        schema:
 *          type: string
 *          example: test
 *      - in: query
 *        name: lastId
 *        required: true
 *        description: 마지막 컨텐츠 번호
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 * @swagger
 *  /contents/filter?done={done}:
 *    get:
 *      summary: 해결 미해결 컨텐츠 분류
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: done
 *        required: true
 *        description: 해결 미해결
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
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 */
/**
 * @swagger
 *  /contents/filter?done={done}&lastId={lastId}:
 *    get:
 *      summary: 해결 미해결 컨텐츠 분류 무한 스크롤 요청
 *      tags: [Contents]
 *      parameters:
 *      - in: query
 *        name: done
 *        required: true
 *        description: 검색 키워드
 *        schema:
 *          type: string
 *      - in: query
 *        name: lastId
 *        required: true
 *        description: 마지막 컨텐츠 번호
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
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
 * @swagger
 *  /contents/mypost:
 *    get:
 *      summary: 해당유저의 작성한 게시글 불러오기
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
 *                        { "id": 3, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 2, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                        { "id": 1, "title": "test title", "thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": false, "in":false,"userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [ 3,2,1] },
 *                      ]
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

module.exports = router;
