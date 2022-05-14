import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input, Avatar } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { XLView, LView, MView, SView } from '../config';
import UserMore from './UserMore';

const { Search } = Input;

const HeaderWrapper = styled.header`
  margin: auto;
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  #logo {
    width: 130px;
    height: 42px;
  }
  .left-container {
    margin-left: 1rem;
    .logo {
      font-size: 21px;
      font-size: 700;
      cursor: pointer;
    }
  }
  .right-container {
    display: flex;
    margin-right: 1rem;
  }
  .login-button {
    margin-left: 1.5rem;
    width: 70px;
    height: 32px;
    color: white;
    background-color: black;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
  .login-button:hover {
    background-color: rgba(0, 5, 12, 0.8);
  }
  .user-container {
    display: flex;
    align-items: center;
    position: relative;
    .user-name {
      margin: 0px 10px 0 10px;
      font-size: 15px;
      font-weight: 500;
    }
    .user-profile {
      margin-right: 5px;
    }
    .unreadCnt {
      position: absolute;
      background-color: red;
      color: white;
      height: 18px;
      width: 18px;
      text-align: center;
      font-size: 11px;
      border-radius: 50%;
      right: 14px;
      z-index: 100;
      top: 0px;
    }
    .user-more {
      cursor: pointer;
    }
  }
  // 반응형
  @media screen and (min-width: ${XLView}px) {
    & {
      width: 1375px;
    }
    .search-input {
      width: 250px;
    }
  }
  @media screen and (max-width: ${LView}px) {
    & {
      width: 1024px;
    }
    .search-input {
      width: 250px;
    }
  }
  @media screen and (max-width: ${MView}px) {
    & {
      width: 90%;
    }
    .search-input {
      width: 260px;
    }
  }
  @media screen and (max-width: ${SView}px) {
    & {
      width: 100%;
    }
    .search-input {
      width: 260px;
      margin-right: 1.5rem;
    }
    .user-name {
      display: none;
    }
  }
`;

function Header() {
  const [isUserMore, setIsUserMore] = useState(false);
  const [search, setSearch] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const { userInfo } = useSelector(state => state.user);
  const { userUnreadComments } = useSelector(state => state.content);
  const { userUnreadChats } = useSelector(state => state.chat);
  const navigator = useNavigate();

  const handleSearch = () => {
    navigator(`/search/${search}`);
  };

  const handleLogin = () => {
    navigator('/login');
  };

  useEffect(() => {
    let commentCnt = 0;
    let chatCnt = 0;
    if (userUnreadComments.length > 0) {
      userUnreadComments[0].forEach(v => {
        commentCnt += v.count;
      });
    }
    if (userUnreadChats.length > 0) {
      userUnreadChats[0].forEach(v => {
        chatCnt += v.count;
      });
    }
    setUnreadCount(chatCnt + commentCnt);
  }, [userUnreadComments, userUnreadChats]);

  return (
    <HeaderWrapper>
      {isUserMore ? <UserMore /> : null}
      <div className="left-container">
        <div onClick={() => navigator('/')} className="logo">
          <img id="logo" src="/Coala_logo.png" alt="coala_logo" />
        </div>
      </div>
      <div className="right-container">
        <Search
          placeholder="search..."
          onChange={e => setSearch(e.target.value)}
          onSearch={handleSearch}
          className="search-input"
        />

        {userInfo ? (
          <div className="user-container">
            <div className="user-name">{userInfo.username}님 안녕하세요</div>
            {unreadCount > 0 && <div className="unreadCnt">{unreadCount}</div>}
            <Avatar className="user-profile" src={userInfo.profile} />
            <CaretDownOutlined
              onClick={() => setIsUserMore(prev => !prev)}
              className="user-more"
            />
          </div>
        ) : (
          <button onClick={handleLogin} type="button" className="login-button">
            로그인
          </button>
        )}
      </div>
    </HeaderWrapper>
  );
}

export default Header;
