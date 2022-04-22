/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';
import { XLView, LView, MView, SView, CoalaGreen } from '../config';
import StackMore from './StackMore';

const Menu = styled.div`
  margin: auto;
  ul {
    padding: 0;
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
  margin-top: 0.5rem !important;
`;

function NavBar() {
  const [widthSize, setWidthSize] = useState(LView);
  const [MenuList, setMenuList] = useState(null);

  const handleResize = () => {
    console.log(`브라우저 화면 사이즈: x:${window.innerWidth}`);
    setWidthSize(window.innerWidth);
  };

  const handleMenuList = value => {
    if (value === MenuList) {
      setMenuList(null);
    } else {
      setMenuList(value);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Menu>
      {widthSize > MView ? (
        <ul>
          <li>
            <p>미해결문제</p>
          </li>
          <li>
            <p>해결된문제</p>
          </li>
          <li onClick={() => handleMenuList('stack-back')}>
            <p>스택(백엔드)문제</p>
            {MenuList === 'stack-back' ? (
              <StackMore stacks={[{ name: 'Node.js' }]} />
            ) : null}
          </li>
          <li onClick={() => handleMenuList('stack-front')}>
            <p>스택(프론트)문제</p>
            {MenuList === 'stack-front' ? (
              <StackMore stacks={[{ name: 'React.js' }]} />
            ) : null}
          </li>
          <li onClick={() => handleMenuList('stack-development')}>
            <p>스택(배포)문제</p>
            {MenuList === 'stack-development' ? (
              <StackMore stacks={[{ name: 'AWS' }]} />
            ) : null}
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <p>미해결문제</p>
          </li>
          <li>
            <p>해결된문제</p>
          </li>
          <li onClick={() => handleMenuList('stacks')}>
            <p>스택문제</p>
            {MenuList === 'stacks' ? (
              <StackMore
                stacks={[
                  { name: 'Node.js' },
                  { name: 'React.js' },
                  { name: 'AWS' },
                ]}
              />
            ) : null}
          </li>
        </ul>
      )}

      <DividerCustom />
    </Menu>
  );
}

export default NavBar;
