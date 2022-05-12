import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import {
  CheckCircleOutlined,
  CheckCircleFilled,
  LoadingOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { signupAPI } from '../../api/user';
import { strongPassword } from './validator';
import { SET_ERROR_MESSAGE, SET_SUCCESS_MESSAGE } from '../../reducer/modal';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    userName: '',
    email: '',
    password: '',
    passwordChecked: '',
  });
  const [isAccept, setIsAccept] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const signupMutation = useMutation(signupAPI);
  const [isCheck, setCheck] = useState(false);
  const [errUserName, setErrUserName] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errPasswordChecked, setErrPasswordChecked] = useState('');
  const dispatch = useDispatch();
  const isValidEmail = emailVal =>
    emailVal.includes('@') && emailVal.includes('.');

  useEffect(() => {
    // handleButtomValid();
    const {
      userName,
      email: curEmail,
      password: curpassword,
      passwordChecked,
    } = signupInfo;

    if (!userName) {
      setErrUserName('이름이 비어있습니다.');
    } else {
      setErrUserName('');
    }
    if (!curEmail || !isValidEmail(curEmail)) {
      setErrEmail('@, . 입력해주세요');
    } else {
      setErrEmail('');
    }
    if (!curpassword || !strongPassword(curpassword)) {
      setErrPassword('비밀번호8자리이상 및 특수문자한개이상 포함해야합니다.');
    } else {
      setErrPassword('');
    }
    if (curpassword !== passwordChecked) {
      setErrPasswordChecked('비밀번호가 일치해야 합니다.');
    } else {
      setErrPasswordChecked('');
    }
  }, [signupInfo]);

  const handleInputValue = (key, e) => {
    // console.log(signupInfo.email);
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

  const handleAccept = () => {
    setIsAccept(true);
  };

  function isCheckBoxClicked() {
    setCheck(!isCheck);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!errUserName && !errPassword && !errPasswordChecked && !errEmail) {
      signupMutation.mutate({
        email: signupInfo.email,
        username: signupInfo.userName,
        password: signupInfo.password,
      });
    } else {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: '모든칸을 제대로 작성해 주세요.',
      });
    }
  };

  useEffect(() => {
    if (signupMutation.isSuccess) {
      dispatch({
        type: SET_SUCCESS_MESSAGE,
        data: '회원가입 성공.',
      });
    } else if (signupMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: signupMutation.error.response.data.message,
      });
    }
  }, [signupMutation.status]);

  return (
    <>
      {/* {signupMutation.isError ? <div>실패</div> : null} */}
      {isAccept ? (
        <SignupDiv>
          <SignLogo to="/">Coala</SignLogo>
          <form onSubmit={handleSubmit}>
            <div className="InputBox">
              <div className="InputTitle">이름</div>
              <input
                className="InputName"
                type="text"
                name="inputName"
                placeholder="이름을 입력하세요."
                onChange={e => handleInputValue('userName', e)}
              />
            </div>
            {errUserName ? (
              <span className="errmessage failureNameMessage ">
                {errUserName}
              </span>
            ) : (
              <span className="errmessage failureNameMessage hidden">
                정답입니다.
              </span>
            )}
            <div className="InputBox">
              <div className="InputTitle">이메일</div>
              <input
                className="InputEmail"
                type="text"
                name="inputEmail"
                placeholder="이메일을 입력하세요."
                onChange={e => handleInputValue('email', e)}
              />
              <br />
              {errEmail ? (
                <span className="errmessage failureEmailMessage">
                  {errEmail}
                </span>
              ) : (
                <span className="errmessage failureEmailMessage hidden">
                  정답
                </span>
              )}
            </div>
            <div className="InputBox">
              <div className="InputTitle">비밀번호</div>
              <input
                className="InputPassword"
                type="password"
                name="inputPassword"
                placeholder="비밀번호를 입력하세요."
                onChange={e => handleInputValue('password', e)}
              />
              <br />
              {errPassword ? (
                <span className="errmessage failurePasswordMessage">
                  {errPassword}
                </span>
              ) : (
                <span className="errmessage ailurePasswordMessage hidden">
                  정답
                </span>
              )}
            </div>
            <div className="InputBox">
              <div className="InputTitle">비밀번호 확인</div>
              <input
                className="InputPasswordChecked"
                type="password"
                name="inputPassword"
                placeholder="비밀번호를 입력하세요."
                onChange={e => handleInputValue('passwordChecked', e)}
              />
              <br />
              {errPasswordChecked ? (
                <span className="errmessage failureCheckMessage">
                  {errPasswordChecked}
                </span>
              ) : (
                <span className="errmessage failureCheckMessage hidden">
                  정답
                </span>
              )}
            </div>
            <button type="submit" className="SignupBtn">
              {signupMutation.isLoading ? <LoadingOutlined /> : '회원가입'}
            </button>
          </form>
        </SignupDiv>
      ) : (
        <AcceptDiv>
          <SignLogo to="/">Coala</SignLogo>
          <div className="termsBox">
            <div className="acceptCheckTitleBox">
              <CheckCircleOutlined
                onClick={() => setIsOn(!isOn)}
                className={isOn === false ? 'acceptIcon' : 'IconCheck'}
              />
              <div className="acceptTitle">
                코알라 이용약관에 모두 동의합니다
              </div>
            </div>
          </div>
          <div className="termsBox">
            <div className="acceptCheckTitleBox">
              <CheckCircleOutlined
                onClick={() => setIsOn(!isOn)}
                className={isOn === false ? 'acceptIcon' : 'IconCheck'}
              />
              <div className="acceptTitle">코알라 이용약관</div>
            </div>
            <div className="AcceptBox" type="text" />
          </div>
          <div className="termsBox">
            <div className="acceptCheckTitleBox">
              <CheckCircleOutlined
                onClick={() => setIsOn(!isOn)}
                className={isOn === false ? 'acceptIcon' : 'IconCheck'}
              />
              <div className="acceptTitle">개인정보 수집 및 동의</div>
            </div>
            <div className="AcceptBox" type="text" />
          </div>
          <div className="termsBox">
            <div className="acceptCheckTitleBox">
              <CheckCircleOutlined
                onClick={() => setIsOn(!isOn)}
                className={isOn === false ? 'acceptIcon' : 'IconCheck'}
              />
              <div className="acceptTitle">위치정보 이용 약관 동의</div>
            </div>
            <div className="AcceptBox" type="text" />
          </div>
          <div className="termsBox">
            <div className="acceptCheckTitleBox">
              <CheckCircleOutlined
                onClick={() => setIsOn(!isOn)}
                className={isOn === false ? 'acceptIcon' : 'IconCheck'}
              />
              <div className="acceptTitle">프로모션 정보수집 동의</div>
            </div>
            <div className="AcceptBox" type="text" />
          </div>
          <button type="button" className="accept-btn" onClick={handleAccept}>
            확인
          </button>
        </AcceptDiv>
      )}{' '}
    </>
  );
}
// 사이트 로고
const SignLogo = styled(Link)`
  color: black;
  text-decoration-line: none;
  font-size: 50px;
  margin-top: 80px;
  margin-bottom: 20px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  cursor: pointer;
  transition: 2s;
`;
// 회원가입 화면
const SignupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .InputBox {
    margin-top: 30px;
  }
  .InputTitle {
    text-align: left;
    font-size: 15px;
    font-weight: bold;
  }
  .SignupBtn {
    margin-top: 40px;
    border-radius: 10px;
    border: none;
    width: 350px;
    height: 55px;
    font-size: 20px;
    font-weight: bold;
    background-color: #555555;
    color: white;
    cursor: pointer;
    transition: 0.6s;
    :hover {
      transform: scale(0.98);
    }
  }
  .InputName,
  .InputPassword,
  .InputPasswordChecked,
  .InputEmail {
    margin-top: 5px;
    width: 350px;
    height: 45px;
    border-color: #999999;
    border-top: none;
    border-left: none;
    border-right: none;
    border-width: 1px;
  }
  .errmessage {
    color: red;
    font-size: 11px;
  }
`;

// 약관동의 화면
const AcceptDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  .accept-btn {
    padding-top: 5px;
    text-align: center;
    margin-top: 45px;
    border-radius: 10px;
    border: none;
    width: 350px;
    height: 55px;
    font-size: 20px;
    font-weight: bold;
    background-color: #555555;
    color: white;
    cursor: pointer;
  }
  .termsBox {
    margin-top: 20px;
  }
  .AcceptBox {
    overflow: auto;
    margin-top: 1px;
    width: 350px;
    height: 100px;
    border: 1px solid grey;
    border-width: 1px;
  }
  .acceptTitle {
    margin-bottom: 10px;
    text-align: left;
    font-size: 17px;
    font-weight: bold;
  }
  .acceptCheckTitleBox {
    display: flex;
  }
  .acceptIcon {
    left: 5px;
    margin-top: 2px;
    font-size: 20px;
    color: black;
  }
  .IconCheck {
    left: 5px;
    margin-top: 2px;
    font-size: 20px;
    color: green;
  }
`;

export default Signup;
