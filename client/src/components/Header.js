import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input, Avatar } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useQuery } from 'react-query';
import { XLView, LView, MView, SView } from '../config';
import UserMore from './UserMore';
import { getfilterContentsAPI } from '../api/content';
import { LOAD_CONTENTS_SUCCESS } from '../reducer/content';

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

function Header({ page }) {
  const [isUserMore, setIsUserMore] = useState(false);
  const [search, setSearch] = useState('');
  const { userInfo } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { data, refetch } = useQuery(
    ['getKeywordContents'],
    () => getfilterContentsAPI({ keyword: search }),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );

  const handleSearch = value => {
    refetch();
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: LOAD_CONTENTS_SUCCESS,
        data: data.data.data,
      });
    }
  }, [data]);
  const handleLogin = () => {
    navigator('/login');
  };

  return (
    <HeaderWrapper>
      {isUserMore ? <UserMore /> : null}
      <div className="left-container">
        <div onClick={() => navigator('/')} className="logo">
          Coala
        </div>
      </div>
      <div className="right-container">
        {page === 'Home' ? (
          <Search
            placeholder="search..."
            onChange={e => setSearch(e.target.value)}
            onSearch={handleSearch}
            className="search-input"
          />
        ) : null}

        {userInfo ? (
          <div className="user-container">
            <div className="user-name">{userInfo.username}님 안녕하세요</div>
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
