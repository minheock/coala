import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    profile: null,
    password: '',
    userName: '',
    passwordChecked: '',
  });

  const handleInputValue = (key, e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

  return (
    <SignupDiv>
      <SignLogo to="/">Coala</SignLogo>
      <InputNameBox>
        <InputTitle>이름</InputTitle>
        <InputName
          type="text"
          name="inputName"
          placeholder="이름을 입력하세요."
          onChange={e => handleInputValue('userName', e)}
        />
      </InputNameBox>
      <InputEmailBox>
        <InputTitle>이메일</InputTitle>
        <InputEmail
          type="text"
          name="inputEmail"
          placeholder="이메일을 입력하세요."
          onChange={e => handleInputValue('email', e)}
        />
      </InputEmailBox>
      <InputPasswordBox>
        <InputTitle>비밀번호</InputTitle>
        <InputPassword
          type="password"
          name="inputPassword"
          placeholder="비밀번호를 입력하세요."
          onChange={e => handleInputValue('password', e)}
        />
      </InputPasswordBox>
      <SuccesPasswordBox>
        <InputTitle>비밀번호 확인</InputTitle>
        <InputPassword
          type="password"
          name="inputPassword"
          placeholder="비밀번호를 입력하세요."
          onChange={e => handleInputValue('passwordChecked', e)}
        />
      </SuccesPasswordBox>
      <SignupBtn>회원가입</SignupBtn>
    </SignupDiv>
  );
}

const SignupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
  .Logo:hover {
    color: red;
  }
`;

const InputNameBox = styled.div`
  margin-top: 80px;
`;

const InputPasswordBox = styled.div`
  margin-top: 40px;
`;
const SuccesPasswordBox = styled.div`
  margin-top: 40px;
`;

const InputEmailBox = styled.div`
  margin-top: 40px;
`;

const InputTitle = styled.div`
  text-align: left;
  font-size: 15px;
  font-weight: bold;
`;

const InputName = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-color: #999999;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
`;

const InputPassword = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-color: #999999;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
`;

const InputEmail = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-color: #999999;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
`;
const SignupBtn = styled.button`
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
`;
const SignLogo = styled(Link)`
  color: black;
  text-decoration-line: none;
  font-size: 50px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  cursor: pointer;
  transition: 2s;
  &:hover {
    color: #555555;
  }
`;

export default Signup;
