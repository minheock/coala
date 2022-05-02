/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';
import { XLView, LView, MView, SView, CoalaGreen } from '../config';
import StackMore from './StackMore';
import { getfilterContentsAPI } from '../api/content';
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
  const dispatch = useDispatch();
  const { data: doneContents, refetch: doneRefetch } = useQuery(
    ['doneContents'],
    () => getfilterContentsAPI({ done: 1 }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    },
  );

  const { data: resolvingContents, refetch: resolvingRefetch } = useQuery(
    ['resolvingContents'],
    () => getfilterContentsAPI({ done: 0 }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    },
  );

  const handleDone = () => {
    doneRefetch();
  };

  const handleResolving = () => {
    resolvingRefetch();
  };
  useEffect(() => {
    if (doneContents) {
      dispatch({
        type: LOAD_CONTENTS_SUCCESS,
        data: doneContents.data.data,
      });
    }
    if (resolvingContents) {
      dispatch({
        type: LOAD_CONTENTS_SUCCESS,
        data: resolvingContents.data.data,
      });
    }
  }, [doneContents, resolvingContents]);

  return (
    <Menu>
      <ul>
        <li onClick={handleResolving}>
          <p>미해결문제</p>
        </li>
        <li onClick={handleDone}>
          <p>해결된문제</p>
        </li>
        <li onClick={() => setMenuList(prev => !prev)}>
          <p>스택별 문제</p>
          {MenuList ? <StackMore /> : null}
        </li>
      </ul>
      <DividerCustom />
    </Menu>
  );
}

export default NavBar;
