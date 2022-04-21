import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Avatar } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
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
  .left-container {
    margin-left: 1rem;
    .logo {
      font-size: 21px;
      font-size: 700;
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
    .user-name {
      margin: 0px 10px 0 10px;
      font-size: 15px;
      font-weight: 500;
    }
    .user-profile {
      margin-right: 5px;
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

const userData = {
  username: '성민',
};

function Header() {
  const [userInfo, setUserInfo] = useState(null);
  const [isUserMore, setIsUserMore] = useState(false);
  const handleSearch = value => console.log(value);
  const handleLogin = () => {
    setUserInfo(userData);
  };
  return (
    <HeaderWrapper>
      {isUserMore ? <UserMore /> : null}
      <div className="left-container">
        <div className="logo">Coala</div>
      </div>
      <div className="right-container">
        <Search
          placeholder="search..."
          onSearch={handleSearch}
          className="search-input"
        />
        {userInfo ? (
          <div className="user-container">
            <div className="user-name">{userInfo.username}님 안녕하세요</div>
            <Avatar
              className="user-profile"
              src="https://joeschmoe.io/api/v1/random"
            />
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
