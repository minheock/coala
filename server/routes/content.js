const express = require('express');
const {
  write,
  remove,
  update,
  donePost,
  likePost,
  unlikePost,
  post,
  comment,
  commentR,
} = require('../controllers/content');

/**
 * @swagger
 * tags:
 *   name: Content
 *   description: Contents management
 */
const router = express.Router();

router.post('/', write); // 컨텐츠 작성
router.patch('/:postId', update); // 작성한 컨텐츠 수정
router.delete('/:postId', remove); // 컨텐츠 삭제
router.patch('/:postId/done', donePost); // 작성한 컨텐츠 문제 해결
router.post('/:postId/like', likePost); // 컨텐츠 좋아요 요청
router.post('/:postId/unlike', unlikePost); // 컨텐츠 좋아요 취소
router.get('/:postId', post); // 컨텐츠 디테일 정보 가져오기
router.post('/comment', comment); // 댓글 요청
router.delete('/comment/:commentId', commentR); // 댓글 삭제
/**
 * @swagger
 *  /content:
 *    post:
 *      summary: 컨텐츠 작성
 *      tags: [Content]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                   type: integer
 *                   example: 1
 *                title:
 *                   type: string
 *                   example: test
 *                content:
 *                   type: string
 *                   example: test
 *                thumbnail:
 *                   type: string
 *                   example: test
 *                description:
 *                   type: string
 *                   example: test
 *                stack:
 *                   type: string
 *                   example: Javascript
 *      responses:
 *        "200":
 *          description: 컨텐츠 저장 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: post is saved
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "contentId": 1 }
 *                      ]
 *        "400":
 *          description: 컨텐츠 저장 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid request
 */
/**
 * @swagger
 *  /content/{postId}:
 *    patch:
 *      summary: 컨텐츠 수정
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                   type: string
 *                   example: test
 *                content:
 *                   type: string
 *                   example: test
 *                stack:
 *                   type: string
 *                   example: Javascript
 *                thumbnail:
 *                   type: string
 *                   example: test
 *                description:
 *                   type: string
 *                   example: test
 *      responses:
 *        "200":
 *          description: 컨텐츠 수정 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: post update
 *                  data:
 *                    type: string
 *                    example:
 *                      [
 *                        { "contentId": 1 }
 *                      ]
 *        "400":
 *          description: 컨텐츠 수정 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid request
 *        "409":
 *          description: 파라미터 부족 컨텐츠 수정 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: does not exist postId
 */
/**
 * @swagger
 *  /content/{postId}:
 *    delete:
 *      summary: 컨텐츠 삭제
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: integer
 *      responses:
 *        "200":
 *          description: 컨텐츠 삭제 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: post delete
 *        "400":
 *          description: 컨텐츠 삭제 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: does not exist postId
 */
/**
 * @swagger
 *  /content/{postId}/done:
 *    patch:
 *      summary: 컨텐츠 문제 해결 완료
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: integer
 *      responses:
 *        "200":
 *          description: 컨텐츠 문제 해결 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: post done
 *        "400":
 *          description: 컨텐츠 문제 해결 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: does not exist postId
 */
/**
 * @swagger
 *  /content/{postId}/like:
 *    post:
 *      summary: 컨텐츠 좋아요 요청
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: integer
 *          example: 1
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                   type: integer
 *                   example: 1
 *      responses:
 *        "200":
 *          description: 컨텐츠 좋아요 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: post like
 *        "400":
 *          description: 컨텐츠 좋아요 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: does not exist postId
 */
/**
 * @swagger
 *  /content/{postId}/unlike:
 *    post:
 *      summary: 컨텐츠 좋아요 취소
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: integer
 *          example: 1
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                   type: integer
 *                   example: 1
 *      responses:
 *        "200":
 *          description: 컨텐츠 좋아요 취소 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: post unlike
 *        "400":
 *          description: 컨텐츠 좋아요 취소 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: does not exist postId
 */
/**
 * @swagger
 *  /content/{postId}:
 *    get:
 *      summary: 컨텐츠 디테일 정보 가져오기
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *        description: 컨텐츠 아이디
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
 *                        { "id": 1, "title": "test title","content":"test","thumbnail": "test", "description": "test description...","updatedAt": "20xx-xx-xx xx:xx:xx", "stack": "Javascript", "done": true, "userInfo": { "id": 1, "username": "tester", "profile": "test" }, "likers": [3,2,1], "comments": [{"postId": 1, "userId": 1,"comment": "test 1","createdAt": "20xx-xx-xx xx:xx:xx","userInfo": { "username": "tester", "profile": "test" }}] }
 */
/**
 * @swagger
 *  /content/comment:
 *    post:
 *      summary: 댓글 작성 요청
 *      tags: [Content]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                   type: integer
 *                   example: 1
 *                postId:
 *                   type: integer
 *                   example: 1
 *                comment:
 *                  type: string
 *                  example: test
 *      responses:
 *        "200":
 *          description: 코멘트 작성 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: comment is saved
 *                  data:
 *                    type: string
 *                    example:
 *                      {"commentId": 1}
 *        "400":
 *          description: 파라미터 에러로 인한 작성 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid request
 */
/**
 * @swagger
 *  /content/comment/{commentId}:
 *    delete:
 *      summary: 댓글 삭제 요청
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: commentId
 *        required: true
 *        description: 코멘트 아이디
 *        schema:
 *          type: integer
 *          example: 1
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                   type: integer
 *                   example: 1
 *                postId:
 *                   type: integer
 *                   example: 1
 *      responses:
 *        "200":
 *          description: 코멘트 삭제 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: comment delete
 *        "400":
 *          description: 파라미터 에러로 인한 작성 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid request
 *        "409":
 *          description: 요청 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: 요청 실패
 */
module.exports = router;
