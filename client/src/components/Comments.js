import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { useParams } from 'react-router';
import { commentContentAPI } from '../api/content';
import { SET_ERROR_MESSAGE } from '../reducer/modal';

const { TextArea } = Input;
const CommentContainer = styled.div`
  margin-top: 3rem;
  width: 80%;
  .Comment-head {
    font-size: 17px;
    font-weight: 1000;
    margin-bottom: 1rem;
  }
  .not-a-member {
    width: 80%;
    //border: 1px solid #d9d9d9;
    border-radius: 2px;
    padding: 40px 0px;
    margin-bottom: 3rem;
    text-align: center;
  }
`;

function Comments({
  postTitle,
  postUserId,
  userInfo,
  contentId,
  hadleInputComments,
  commentsList,
}) {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const postCommentMutation = useMutation(commentContentAPI);

  // 인풋에 작성하는 메세지 스테이트
  const handleComment = e => {
    setComment(e.target.value);
  };

  useEffect(() => {
    if (postCommentMutation.isSuccess) {
      // 요청 성공시 댓글 바로 보여주는 작업
      const comments = postCommentMutation.data.data.data;
      const newComment = {
        commentId: comments.commentId,
        comment: comments.comment,
        // 한국시간 적용..
        createdAt: `${comments.createdAt.slice(0, 10)}
        ${
          Number(comments.createdAt.slice(11, 13)) + 9
        }${comments.createdAt.slice(13, 19)}`,
        postId: comments.postId,
        userId: comments.userId,
        userinfo: {
          username: userInfo.username,
          profile: userInfo.profile,
        },
      };
      hadleInputComments([newComment, ...commentsList]);
      setComment('');
      window.location.reload();
    } else if (postCommentMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: '댓글 작성 실패.',
      });
    }
  }, [postCommentMutation.status]);

  const handleSubmit = e => {
    e.preventDefault();
    if (comment) {
      const commentInfo = {
        userId: userInfo.id,
        postId: contentId,
        comment,
        postUserId,
        postTitle,
      };
      postCommentMutation.mutate(commentInfo);
    } else {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: '  댓글을 작성해주세요.',
      });
    }
  };

  return (
    <CommentContainer>
      <div className="Comment-head">Comment</div>
      {userInfo ? (
        <form onSubmit={handleSubmit}>
          <Form.Item>
            <TextArea rows={4} value={comment} onChange={handleComment} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </form>
      ) : (
        <div className="not-a-member">로그인 후 이용해 주세요</div>
      )}
    </CommentContainer>
  );
}

export default Comments;
