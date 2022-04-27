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
  commentRemove,
} = require('../controllers/content');

/**
 * @swagger
 * tags:
 *   name: Content
 *   description: Contents management
 */
const router = express.Router();
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
 *                content:
 *                   type: string
 *                description:
 *                   type: string
 *                stack:
 *                   type: string
 *
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
router.post('/', write); // 컨텐츠 작성
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
 *                   description: ""
 *                content:
 *                   type: text
 *                   description: ""
 *                stack:
 *                   type: string
 *                   description: ""
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
 */
router.patch('/:postId', update); // 작성한 컨텐츠 수정
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
 *                    example: Invalid request
 */
router.delete('/:postId', remove); // 컨텐츠 삭제
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
 *                    example: Invalid request
 */
router.patch('/:postId/done', donePost); // 작성한 컨텐츠 문제 해결
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
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                   type: integer
 *                   description: ""
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
 *                    example: Invalid request
 */
router.post('/:postId/like', likePost); // 컨텐츠 좋아요 요청
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
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                   type: integer
 *                   description: ""
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
 *                    example: Invalid request
 */
router.post('/:postId/unlike', unlikePost); // 컨텐츠 좋아요 취소
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
 *                        { "title": "js", "content": "hellow world", "stack":"javascript", "done": true },
 *                      ]
 */
router.get('/:postId', post); // 컨텐츠 디테일 정보 가져오기
router.post('/comment', comment); // 댓글 요청
router.delete('/comment', commentRemove); // 댓글 삭제

module.exports = router;
