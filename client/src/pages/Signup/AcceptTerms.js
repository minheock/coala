import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// <FontAwesomeIcon icon="fa-regular fa-square-check" />
function AcceptTerms() {
  return (
    <AcceptDiv>
      <AcceptLogo to="/">Coala</AcceptLogo>
      <InputNameBox>
        <InputTitle>코알라 이용약관에 모두 동의합니다</InputTitle>
      </InputNameBox>

      <InputEmailBox>
        <InputTitle>코알라 이용약관 동의</InputTitle>
        <AcceptBox1
          type="text"
          name="inputEmail"
          placeholder="이메일을 입력하세요."
        />
      </InputEmailBox>

      <InputPasswordBox>
        <InputTitle>개인정보 수집 및 이용동의</InputTitle>
        <AcceptBox2
          type="text"
          name="inputEmail"
          placeholder="이메일을 입력하세요."
        />
      </InputPasswordBox>
      <SuccesPasswordBox>
        <InputTitle>위치정보 이용약관 동의</InputTitle>
        <AcceptBox3
          type="text"
          name="inputEmail"
          placeholder="이메일을 입력하세요."
        />
      </SuccesPasswordBox>
      <InputPhoneNumBox>
        <InputTitle>프로모션 정보 수신 동의</InputTitle>
        <AcceptBox4
          type="text"
          name="inputEmail"
          placeholder="이메일을 입력하세요."
        />
      </InputPhoneNumBox>
      <AcceptBtn to="/signup">확인</AcceptBtn>
    </AcceptDiv>
  );
}

const AcceptDiv = styled.div`
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

const InputIdBox = styled.div`
  margin-top: 40px;
`;

const InputPasswordBox = styled.div`
  margin-top: 40px;
`;
const SuccesPasswordBox = styled.div`
  margin-top: 40px;
`;

const InputPhoneNumBox = styled.div`
  margin-top: 40px;
`;
const InputEmailBox = styled.div`
  margin-top: 40px;
`;

const InputTitle = styled.div`
  text-align: left;
  font-size: 17px;
  font-weight: bold;
`;

const AcceptBox1 = styled.div`
  overflow: auto;
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border: 1px solid grey;
  border-width: 1px;
`;
const AcceptBox2 = styled.div`
  overflow: auto;
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border: 1px solid grey;
  border-width: 1px;
`;
const AcceptBox3 = styled.div`
  overflow: auto;
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border: 1px solid grey;
  border-width: 1px;
`;
const AcceptBox4 = styled.div`
  overflow: auto;
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border: 1px solid grey;
  border-width: 1px;
`;

const AcceptBtn = styled(Link)`
  padding-top: 10px;
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
  &:hover {
    color: white;
  }
`;
const AcceptLogo = styled(Link)`
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

export default AcceptTerms;
