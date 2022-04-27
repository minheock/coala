import { faCircleXmark as close } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from 'react-query';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { loginAPI } from '../../api/user';
import { LOG_IN_SUCCESS } from '../../reducer/user';
import { SView } from '../../config';

function Login() {
  const [inputValue, setValue] = useState({ email: '', password: '' });
  const loginMutation = useMutation(loginAPI);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function inputhandler(e, key) {
    setValue({ ...inputValue, [key]: e.target.value });
  }
  function Reset(e, key) {
    setValue({ ...inputValue, [key]: '' });
  }

  const handleSubmit = e => {
    e.preventDefault();
    loginMutation.mutate({
      email: inputValue.email,
      password: inputValue.password,
    });
  };

  useEffect(() => {
    if (loginMutation.isSuccess) {
      const userInfo = loginMutation.data.data;
      console.log(userInfo);
      dispatch({
        type: LOG_IN_SUCCESS,
        data: userInfo.data,
      });
      navigate('/');
    } else if (loginMutation.isError) {
      console.error(loginMutation.error);
    }
  }, [loginMutation.status]);

  return (
    <LoginWrapper>
      <div className="login-container">
        <h1>
          <Link className="logo" to="/">
            Login
          </Link>
        </h1>
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className="inputIdPw">
              <div className="inputIdBox">
                <Input
                  type="text"
                  placeholder="아이디 입력"
                  onChange={e => inputhandler(e, 'email')}
                  value={inputValue.email}
                />
                <FontAwesomeIcon
                  icon={close}
                  onClick={e => Reset(e, 'email')}
                  className={
                    inputValue.email.length === 0 ? 'id-close hide' : 'id-close'
                  }
                />
              </div>
              <div className="inputPasswordBox">
                <Input
                  type="password"
                  onChange={e => inputhandler(e, 'password')}
                  value={inputValue.password}
                  placeholder="비밀번호 입력"
                />
                <FontAwesomeIcon
                  icon={close}
                  onClick={e => Reset(e, 'password')}
                  className={
                    inputValue.password.length === 0
                      ? 'pw-close hide'
                      : 'pw-close'
                  }
                />
              </div>
              <div className="fail-message hidden">
                아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시
                확인해주세요.
              </div>
            </div>
            <LoginBtn type="submit">
              {loginMutation.isLoading ? <LoadingOutlined /> : '로그인'}
            </LoginBtn>
            <Link to="/signup">
              <div className="sighup">회원가입</div>
            </Link>
          </form>
        </div>
      </div>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPqmG4jkW21I8b4vcgQ4WaHYEkulAkGK-0w&usqp=CAU');
  background-size: cover;
  align-items: center;
  position: absolute;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  height: 100%;
  width: 100%;

  .logo {
    height: 50px;
    font-size: 150%;
    font-family: sans-serif;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 15%;
    color: whitesmoke;
  }
  .login-container {
    /* border: solid 1px #dadada; */
    background-color: rgba(30, 30, 30, 0.5);
    justify-content: center;
    border-radius: 6%;
    height: 600px;
    width: 450px;
    /* align-items: center; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .login-box {
    /* border: 1px solid #dadada; */
    height: 300px;
    padding-top: 5vh;
    /* padding-right: 5vw; */
    padding-left: 110px;
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
    margin-bottom: 3em;
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
  .fail-message {
    float: left;
    color: red;
    height: 3vh;
    font-weight: 500;
    margin-top: 1vh;
    width: 72%;
    font-size: 10.5px;
  }
  .sighup {
    color: white;
    font-size: 11px;
    margin-top: 35px;
    font-weight: 400;
    font-family: 'montserrat', sans-serif;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      font-size: 11.4px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: ${SView}px) {
    & {
      width: 90%;
    }
    .login-container {
      height: 70%;
      width: 70%;
    }
    .login-box {
      padding-left: 12%;
      width: 70%;
    }
    .sighup {
      margin-top: 15px;
    }
    @media screen and (max-width: ${SView - 180}px) {
      .login-box {
        padding-left: 5%;
      }
    }
  }
`;

const Input = styled.input`
  padding: 14px 17px 13px;
  display: block;
  width: 300px;
  height: 4vh;
  font-size: 14px;
  font-weight: 350;
  letter-spacing: -0.5px;
  border-top: none;
  border-left: none;
  border-right: none;
  color: white;
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
  margin-top: 1vh;
  border-radius: 10px;
  border: none;
  width: 215px;
  height: 45px;
  font-size: 20px;

  font-weight: bold;
  background-color: #555555;
  color: white;
  transition: 0.6s;
  cursor: pointer;
  :hover {
    transform: scale(0.97);
  }
`;

export default Login;
