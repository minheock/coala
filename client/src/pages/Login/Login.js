import '../../App.css';
import { faCircleXmark as close } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { text } from '@fortawesome/fontawesome-svg-core';
import { onlyNumberAndEnglish as NumEng } from '../Signup/validator';
// import { XLView, LView, MView, SView } from '../config'
// <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />

// 그림자와 음영으로 효과
const LoginWrapper = styled.div`
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 60%;
  width: 80%;

  .logo {
    font-size: 150%;
    font-family: sans-serif;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 10%;
    color: black;
  }
  .login-container {
    border: solid 1px #dadada;
    justify-content: center;
    border-radius: 6%;
    height: 53vh;
    width: 20vw;
    /* align-items: center; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .login-box {
    /* border: 1px solid #dadada; */
    height: 20vw;
    padding-top: 5vh;
    /* padding-right: 5vw; */
    padding-left: 5vw;
    width: 100%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
  }
  .inputIdPw {
    display: inline-block;
    margin-top: 3vh;
    /* table-layout: fixed; */
    /* position: relative; */
    /* width: 100%; */
    /* box-sizing: border-box; */
  }
  .id-close {
    position: relative;
    margin-top: 1.6vh;
  }
  .pw-close {
    position: relative;
    margin-top: 1.6vh;
  }
  .inputIdBox {
    display: flex;
    /* position: relative; */
    width: 11vw;
    margin-bottom: 5em;
    height: 4vh;
    /* padding: 16px 18px 15px; */
    /* box-sizing: border-box; */
    /* text-align: left; */
    /* box-shadow: 0 2px 6px 0 rgb(68 68 68 / 8%); */
  }
  .inputPasswordBox {
    display: flex;
    width: 11vw;
    margin-bottom: 1em;
    height: 4vh;
  }
  .sighup {
    margin-top: 45px;
    font-weight: 500;
    border: none;
    background-color: white;
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 14px 17px 13px;
  display: block;
  width: 10vw;
  height: 4vh;
  font-size: 14px;
  font-weight: 350;
  /* line-height: 10000px; */
  letter-spacing: -0.5px;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #222;
  box-sizing: border-box;
  z-index: 4;
  border-radius: 0;
  /* border: none; */
  background: 0 0;
  appearance: none;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
`;
const LoginBtn = styled.button`
  margin-top: 7vh;
  border-radius: 10px;
  border: none;
  width: 6vw;
  height: 4vh;
  font-size: 20px;
  margin-left: 1.8vw;
  font-weight: bold;
  background-color: #555555;
  color: white;
  cursor: pointer;
`;
function Login() {
  //   const [loginInfo, setLoginInfo] = useState({
  //     email: '',
  //     password: '',
  //   });
  // const [isLoginPush, setLoginPush] = useState(false);
  const [inputValue, setValue] = useState({ id: '', pw: '' });
  function inputhandler(e, key) {
    setValue({ ...inputValue, [key]: e.target.value });
  }
  function Reset(e, key) {
    setValue({ ...inputValue, [key]: '' });
  }

  return (
    <LoginWrapper>
      <div className="login-container">
        <h1>
          <Link className="logo" to="/signup">
            Login
          </Link>
        </h1>
        <div className="login-box">
          <div className="inputIdPw">
            <div className="inputIdBox">
              <Input
                type="text"
                placeholder="아이디 입력"
                onChange={e => inputhandler(e, 'id')}
                value={inputValue.id}
              />
              <FontAwesomeIcon
                icon={close}
                onClick={e => Reset(e, 'id')}
                className={
                  inputValue.id.length === 0 ? 'id-close hide' : 'id-close'
                }
              />
            </div>
            <div className="inputPasswordBox">
              <Input
                type="password"
                onChange={e => inputhandler(e, 'pw')}
                value={inputValue.pw}
                placeholder="비밀번호 입력"
              />
              <FontAwesomeIcon
                icon={close}
                onClick={e => Reset(e, 'pw')}
                className={
                  inputValue.pw.length === 0 ? 'pw-close hide' : 'pw-close'
                }
              />
            </div>
          </div>
          {/* <LoginBtn
          onClick={() => {
            handleSignin(loginInfo);
          }}
          >
          로그인
          </LoginBtn> */}

          <LoginBtn type="submit">로그인</LoginBtn>
          {/* <Link to="/signup">
            <div className="sighup">회원가입 하시겠습니까?</div>
          </Link> */}
        </div>
      </div>
    </LoginWrapper>
  );
}

export default Login;
