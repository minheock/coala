import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
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
