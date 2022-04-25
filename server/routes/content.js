const express = require('express');
const {
  write,
  remove,
  update,
  donePost,
  likePost,
  unlikePost,
  post,
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
 *                user_id:
 *                   type: string
 *                   description: ""
 *                content_name:
 *                   type: string
 *                   description: ""
 *                content_body:
 *                   type: string
 *                   description: ""
 *                category:
 *                   type: string
 *                   description: ""
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
 *  /content/{contentId}:
 *    patch:
 *      summary: 컨텐츠 수정
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: contentId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                content_name:
 *                   type: string
 *                   description: ""
 *                content_body:
 *                   type: string
 *                   description: ""
 *                category:
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
router.patch('/:contentId', update); // 작성한 컨텐츠 수정
/**
 * @swagger
 *  /content/{contentId}:
 *    delete:
 *      summary: 컨텐츠 삭제
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: contentId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: string
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
router.delete('/:contentId', remove); // 컨텐츠 삭제
/**
 * @swagger
 *  /content/{contentId}/done:
 *    post:
 *      summary: 컨텐츠 문제 해결 완료
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: contentId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: string
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
router.post('/:contentId/done', donePost); // 작성한 컨텐츠 문제 해결
/**
 * @swagger
 *  /content/{contentId}/like:
 *    post:
 *      summary: 컨텐츠 좋아요 요청
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: contentId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: string
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
router.post('/:contentId/like', likePost); // 컨텐츠 좋아요 요청
/**
 * @swagger
 *  /content/{contentId}/unlike:
 *    post:
 *      summary: 컨텐츠 좋아요 취소
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: contentId
 *        required: true
 *        description: 컨텐츠 아이디
 *        schema:
 *          type: string
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
router.post('/:contentId/unlike', unlikePost); // 컨텐츠 좋아요 취소
/**
 * @swagger
 *  /content/{contentId}:
 *    get:
 *      summary: 컨텐츠 디테일 정보 가져오기
 *      tags: [Content]
 *      parameters:
 *      - in: path
 *        name: contentId
 *        required: true
 *        description: 컨텐츠 아이디
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
 *                        { "content_name": "js", "content_body": "hellow world", "category":"javascript" },
 *                      ]
 */
router.get('/:contentId', post); // 컨텐츠 디테일 정보 가져오기

module.exports = router;
