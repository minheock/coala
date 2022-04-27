import React from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { Avatar } from 'antd';

import Header from '../components/Header';
import { CoalaGreen, CoalaGrey, SView } from '../config';

const Container = styled.main`
  width: 95%;
  margin: auto;
  article {
    width: 65%;
    .content-title {
      text-align: center;
      margin-top: 10px;
      font-size: 30px;
      font-weight: 700;
    }
    .tag {
      width: 130px;
      height: 30px;
      text-align: center;
      line-height: 2rem;
      font-size: 17px;
      font-weight: 700;
      border-radius: 4px;
      background-color: ${CoalaGrey};
      color: ${CoalaGreen};
    }
  }
  .user-info {
    margin-bottom: 1rem;
    .user-profile {
      margin-right: 5px;
    }
    .updateAt {
      display: inline-block;
      margin-left: 1rem;
    }
  }
  // 반응형
  @media screen and (max-width: ${SView}px) {
    article {
      width: 90%;
      margin: auto;
    }
  }
`;

function ContentDetail({ contentInfo }) {
  return (
    <Container>
      <Header />
      <article>
        <h1 className="content-title">{contentInfo.title}</h1>
        <div className="user-info">
          <Avatar className="user-profile" src={contentInfo.userInfo.profile} />
          <span>{contentInfo.userInfo.username}</span>
          <span className="updateAt">{contentInfo.updateAt}</span>
        </div>
        <div className="tag">{contentInfo.stack}</div>
        <Viewer initialValue={contentInfo.editorBody} />
      </article>
    </Container>
  );
}

export default ContentDetail;
