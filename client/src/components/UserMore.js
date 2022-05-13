import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { LOG_OUT_SUCCESS } from '../reducer/user';
import { CoalaGreen, CoalaGrey } from '../config';
import { logoutAPI } from '../api/user';
import UnreadMessageList from './UnreadMessageList';

const Container = styled.div`
  position: absolute;
  -webkit-box-shadow: 2px 1px 17px -3px rgba(0, 0, 0, 0.42);
  box-shadow: 2px 1px 17px -3px rgba(0, 0, 0, 0.42);
  width: 180px;
  top: 55px;
  right: 13px;
  z-index: 1000;
  background-color: #ffffff;
  .link {
    color: black;
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0;
    li {
      position: relative;
      padding-left: 10px;
      line-height: 3rem;
      font-size: 16px;
      font-weight: 500;
      height: 48px;
      width: 100%;
      transition: 0.3s ease-in;
      cursor: pointer;
    }
    li:hover {
      background-color: ${CoalaGrey};
      color: ${CoalaGreen};
    }
    .li-chat,
    .li-comment {
      position: relative;
    }
    .unreadChats,
    .unreadComments {
      position: absolute;
      top: 0.7rem;
      right: 0.5rem;
      display: inline-block;
      background-color: red;
      color: white;
      line-height: 20px;
      height: 20px;
      width: 20px;
      text-align: center;
      font-size: 11px;
      border-radius: 50%;
    }
  }
`;

function UserMore() {
  const { userInfo } = useSelector(state => state.user);
  const { userUnreadComments } = useSelector(state => state.content);
  const { userUnreadChats } = useSelector(state => state.chat);
  const [unreadChats, setUnreadChats] = useState({ total: 0, body: [] });
  const [unreadCommetns, setUnreadComments] = useState({ total: 0, body: [] });
  const [isChatMore, setIsChatMore] = useState(false);
  const [isCommentMore, setIsCommentMore] = useState(false);
  const dispatch = useDispatch();

  const logoutMutation = useMutation(logoutAPI);
  const [admin, setAdmin] = useState(true);
  useEffect(() => {
    if (logoutMutation.isSuccess) {
      dispatch({
        type: LOG_OUT_SUCCESS,
      });
      window.location.replace('/');
    }
  }, [logoutMutation.status]);

  function handleLogout() {
    logoutMutation.mutate({});
  }
  useEffect(() => {
    if (userInfo) {
      if (userInfo.admin === false) {
        setAdmin(false);
      }
    }
  }, [userInfo]);

  useEffect(() => {
    let commentCnt = 0;
    let chatCnt = 0;
    const urComments = [];
    const urChats = [];
    if (userUnreadComments.length > 0) {
      userUnreadComments[0].forEach(v => {
        commentCnt += v.count;
        urComments.push(v);
      });
    }
    if (userUnreadChats.length > 0) {
      userUnreadChats[0].forEach(v => {
        chatCnt += v.count;
        urChats.push(v);
      });
    }
    setUnreadChats({ total: chatCnt, body: urChats });
    setUnreadComments({ total: commentCnt, body: urComments });
  }, [userUnreadComments, userUnreadChats]);
  return (
    <Container className={!userInfo && 'hidden'}>
      <ul>
        {!admin ? null : (
          <Link className="link" to="/admin">
            <li>관리자</li>
          </Link>
        )}
        <Link className="link" to="/write">
          <li>질문작성</li>
        </Link>
        <li
          className="li-chat"
          onClick={() => {
            if (unreadChats.total > 0) {
              setIsCommentMore(false);
              setIsChatMore(prev => !prev);
            }
          }}
        >
          메세지{' '}
          {unreadChats.total > 0 && (
            <div className="unreadChats">{unreadChats.total}</div>
          )}
          {isChatMore && (
            <UnreadMessageList unreadMessage={unreadChats.body} type="chat" />
          )}
        </li>
        <li
          className="li-comment"
          onClick={() => {
            if (unreadCommetns.total > 0) {
              setIsCommentMore(prev => !prev);
              setIsChatMore(false);
            }
          }}
        >
          댓글{' '}
          {unreadCommetns.total > 0 && (
            <div className="unreadComments">{unreadCommetns.total}</div>
          )}
          {isCommentMore && (
            <UnreadMessageList
              unreadMessage={unreadCommetns.body}
              type="comment"
            />
          )}
        </li>
        <Link className="link" to="/mypage">
          <li>마이페이지</li>
        </Link>
        <div className="logout" onClick={handleLogout}>
          <li>로그아웃</li>
        </div>
      </ul>
    </Container>
  );
}

export default UserMore;
