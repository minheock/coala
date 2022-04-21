import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">Coala</div>
      <div className="right-container">
        <input type="search" />
        <button type="button" className="login-button">
          로그인
        </button>
      </div>
    </header>
  );
}

export default Header;
