import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_SUCCESS } from '../reducer/user';
import { CoalaGreen, CoalaGrey } from '../config';

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
  }
`;

function UserMore() {
  const { userInfo } = useSelector(state => state.user);
  const dispatch = useDispatch();
  function handleLogout() {
    if (userInfo) {
      dispatch({
        type: LOG_OUT_SUCCESS,
      });
    }
  }
  return (
    <Container className={userInfo ? null : 'hidden'}>
      <ul>
        <Link className="link" to="/write">
          <li>질문작성</li>
        </Link>
        <li>메세지 </li>
        <li>댓글</li>
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
