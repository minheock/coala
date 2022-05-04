import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Comment, Avatar, Tooltip, List } from 'antd';

const CommentLists = styled.div`
  .comment-list {
    font-size: 17px;
    font-weight: 1000;
    margin: 1rem 0px;
  }
  .userinfo-box {
    width: 80%;
    margin: 1.5rem 0px;
    border-bottom: 1px solid #d9d9d9;
  }
`;

function CommentList({ comments }) {
  return (
    <CommentLists>
      <div className="comment-list">Comment List</div>
      {comments.map(commentInfo => (
        <div className="comment-box" key={commentInfo.id}>
          <div className="userinfo-box">
            <Avatar src={commentInfo.userinfo.profile} />
            <span>{commentInfo.userinfo.username} </span>
            <span>{commentInfo.createdAt}</span>
          </div>
          <div className="user-comment">{commentInfo.comment}</div>
        </div>
      ))}
    </CommentLists>
  );
}

export default CommentList;
