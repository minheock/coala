/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';
import { XLView, LView, MView, SView, CoalaGreen } from '../config';
import StackMore from './StackMore';
import { getfilterContentsAPI, getContentsAPI } from '../api/content';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { LOAD_CONTENTS_SUCCESS } from '../reducer/content';

const Menu = styled.div`
  margin: auto;
  ul {
    padding: 0;
    margin-bottom: 0px;
  }
  li {
    position: relative;
    list-style: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    margin-right: 0.5rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: 0.1s ease-in;
    p:hover {
      color: ${CoalaGreen};
    }
  }

  // 반응형
  @media screen and (min-width: ${XLView}px) {
    & {
      width: 1375px;
    }
  }
  @media screen and (max-width: ${LView}px) {
    & {
      width: 1024px;
    }
  }
  @media screen and (max-width: ${MView}px) {
    & {
      width: 90%;
    }
  }
  @media screen and (max-width: ${SView}px) {
    & {
      width: 100%;
    }
  }
`;
const DividerCustom = styled(Divider)`
  margin-top: 0px !important;
  margin-bottom: 0px !important;
`;

function NavBar() {
  const [MenuList, setMenuList] = useState(false);
  const [done, setDone] = useState(null);
  const dispatch = useDispatch();
  const { data: contentsData } = useQuery('contents', getContentsAPI, {
    enabled: done === null,
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실페시 재실행 여부
  });

  const { data: filterDoneContents } = useQuery(
    ['filterDoneContents', done],
    () => getfilterContentsAPI({ done }),
    {
      enabled: done !== null,
      refetchOnWindowFocus: false,
    },
  );

  const handleAll = () => {
    setDone(null);
  };
  const handleDone = () => {
    setDone(1);
  };

  const handleResolving = () => {
    setDone(0);
  };

  useEffect(() => {
    if (filterDoneContents) {
      dispatch({
        type: LOAD_CONTENTS_SUCCESS,
        data: filterDoneContents.data.data,
      });
    }
  }, [filterDoneContents]);

  useEffect(() => {
    if (contentsData) {
      dispatch({
        type: LOAD_CONTENTS_SUCCESS,
        data: contentsData.data.data,
      });
    }
  }, [contentsData]);

  return (
    <Menu>
      <ul>
        <li onClick={handleAll}>
          <p>전체문제</p>
        </li>
        <li onClick={handleResolving}>
          <p>미해결문제</p>
        </li>
        <li onClick={handleDone}>
          <p>해결된문제</p>
        </li>
        <li onClick={() => setMenuList(prev => !prev)}>
          <p>스택별 문제</p>
          {MenuList ? <StackMore closeMenuList={setMenuList} /> : null}
        </li>
      </ul>
      <DividerCustom />
    </Menu>
  );
}

export default NavBar;
