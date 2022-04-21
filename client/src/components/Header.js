import React from 'react';
import styled from 'styled-components';
import { XLView, LView, MView } from '../config';

const HeaderWrapper = styled.header`
  margin: auto;
  display: flex;
  justify-content: space-between;
  .left-container {
    margin-left: 1rem;
    .logo {
      font-size: 21px;
      font-size: 700;
    }
  }
  .right-container {
    margin-right: 1rem;
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
`;

function Header() {
  return (
    <HeaderWrapper>
      <div className="left-container">
        <div className="logo">Coala</div>
      </div>
      <div className="right-container">
        <input type="search" />
        <button type="button" className="login-button">
          로그인
        </button>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
