import { faCircleXmark as close } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from 'react-query';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ERROR_MESSAGE } from '../../reducer/modal';
import { loginAPI } from '../../api/user';
import { LOG_IN_SUCCESS } from '../../reducer/user';
import { SView } from '../../config';

function Login() {
  const [inputValue, setValue] = useState({ email: '', password: '' });
  const loginMutation = useMutation(loginAPI);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector(state => state.user);
  if (userInfo) {
    navigate('/');
  }
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
      const userinfo = loginMutation.data.data;
      console.log(userinfo);
      dispatch({
        type: LOG_IN_SUCCESS,
        data: userinfo.data,
      });
      navigate('/');
    } else if (loginMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: loginMutation.error.response.data.message,
      });
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
            </div>
            <br />
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
  background: linear-gradient(15deg, green, #999999);
  background-size: cover;
  align-items: center;
  position: absolute;
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
    background-color: rgba(30, 30, 30, 0.5);
    justify-content: center;
    border-radius: 45px;
    height: 600px;
    width: 450px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .login-box {
    height: 300px;
    padding-top: 5vh;
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
  }
  .id-close {
    position: relative;
    margin-top: 1.6vh;
    color: whitesmoke;
  }
  .pw-close {
    position: relative;
    margin-top: 1.6vh;
    color: whitesmoke;
  }
  .inputIdBox {
    display: flex;
    width: 11vw;
    margin-bottom: 3em;
    height: 4vh;
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
      height: 500px;
      width: 400px;
    }
    .login-box {
      padding-left: 5%;
      width: 70%;
    }
    .sighup {
      margin-top: 25px;
    }
    @media screen and (max-width: ${SView - 180}px) {
      .login-container {
        height: 400px;
        width: 350px;
      }
      .login-box {
        padding-left: 5%;
      }
      .sighup {
        margin-top: 15px;
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
