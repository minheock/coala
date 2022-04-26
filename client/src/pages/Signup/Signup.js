import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { CheckCircleOutlined, CheckCircleFilled } from '@ant-design/icons';
import { signupAPI } from '../../api/user';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    userName: '',
    email: '',
    password: '',
    passwordChecked: '',
  });
  const { email, password } = signupInfo;
  const isValidEmail = email.includes('@') && email.includes('.');
  const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  const isValidPassword = password.length >= 8 && specialLetter >= 1;
  // input에 value가 존재하고
  // 다른 곳을 클릭했을때 함수가 호출됨
  // 함수의 로직에 따라 유효성이 검증이 안되면
  // hiden 속성이 해제되고 경고창이 뜬다.
  const handleButtomValid = () => {
    if (signupInfo.email && !isValidEmail) {
      signupInfo.email = '';
    }
    if (signupInfo.password && !isValidPassword) {
      signupInfo.password = '';
    }
  };

  const [isAccept, setIsAccept] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const signupMutation = useMutation(signupAPI);
  const [isCheck, setCheck] = useState(false);
  const handleInputValue = (key, e) => {
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
    signupMutation.mutate({
      email: signupInfo.email,
      username: signupInfo.userName,
      password: signupInfo.password,
    });
  };

  // if (signupMutation.isLoading) {
  //   return <h1>Loading....</h1>;
  // }

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
            <span className="failureNameMessage hidden">
              잘못된 이름 입니다.
            </span>
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
              <span className="failureEmailMessage hidden">
                @ 와 .을 입력해야합니다.{}
              </span>
            </div>
            <div className="InputBox">
              <div className="InputTitle">비밀번호</div>
              <input
                className="InputPassword"
                type="password"
                name="inputPassword"
                placeholder="비밀번호를 입력하세요."
                onClick={handleButtomValid}
                onChange={e => handleInputValue('password', e)}
              />
              <br />
              <span className="failurePasswordMessage hidden">
                8자리 이상 특수문자 1개가 존재해야 합니다.
              </span>
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
              <span className="failureCheckMessage hidden">
                비밀번호가 일치하지 않습니다.
              </span>
            </div>
            <button type="button" className="SignupBtn">
              회원가입
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
  font-weight: 600;
  font-style: italic;
  text-align: center;
  cursor: pointer;
  transition: 1s;
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
  }
  .InputName {
    margin-top: 5px;
    width: 350px;
    height: 45px;
    border-color: #999999;
    border-top: none;
    border-left: none;
    border-right: none;
    border-width: 1px;
  }
  .InputPassword {
    margin-top: 5px;
    width: 350px;
    height: 45px;
    border-color: #999999;
    border-top: none;
    border-left: none;
    border-right: none;
    border-width: 1px;
  }
  .InputPasswordChecked {
    margin-top: 5px;
    width: 350px;
    height: 45px;
    border-color: #999999;
    border-top: none;
    border-left: none;
    border-right: none;
    border-width: 1px;
  }
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
  .failureNameMessage {
    color: red;
    font-size: 11px;
  }
  .failureEmailMessage {
    color: red;
    font-size: 11px;
  }
  .failurePasswordMessage {
    color: red;
    font-size: 11px;
  }
  .failureCheckMessage {
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
