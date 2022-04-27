import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { XLView, LView, MView, SView } from '../config';

const ContentsContainer = styled.div`
  // 반응형
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
  @media screen and (max-width: ${SView}px) {
    & {
      width: 100%;
    }
  }
`;

const LoadingContent = styled(Card)`
  width: 270px;
  height: 350px;
  margin: 1rem 2rem 1rem 2rem;
  @media screen and (max-width: ${MView}px) {
    & {
      width: 320px;
      height: 410px;
    }
  }
  @media screen and (max-width: ${SView}px) {
    & {
      width: 380px;
      height: 450px;
    }
  }
`;
function LoadingContents() {
  return (
    <ContentsContainer>
      <LoadingContent loading />
      <LoadingContent loading />
      <LoadingContent loading />
      <LoadingContent loading />
      <LoadingContent loading />
      <LoadingContent loading />
      <LoadingContent loading />
      <LoadingContent loading />
      <LoadingContent loading />
      <LoadingContent loading />
    </ContentsContainer>
  );
}

export default LoadingContents;
