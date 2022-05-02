import React, { useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Avatar } from 'antd';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { CommentOutlined } from '@ant-design/icons';
import { getContentAPI } from '../api/content';
import Header from '../components/Header';
import { CoalaGreen, CoalaGrey, SView } from '../config';
import Chat from '../components/Chat';
import ZoomImage from '../components/ZoomImage';

const Container = styled.main`
  width: 85%;
  margin: auto;
  display: flex;
  article {
    width: 100%;
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
  .chat-icon {
    position: fixed;
    bottom: 5rem;
    right: 2.5rem;
    z-index: 1000px;
    font-size: 33px;
    cursor: pointer;
    transition: 0.3s ease-in;
  }
  .chat-icon:hover {
    transform: scale(1.1, 1.1);
  }
  // 반응형
  @media screen and (max-width: ${SView}px) {
    & {
      flex-direction: column;
    }
    article {
      width: 90%;
      margin: auto;
    }
  }
`;

function ContentDetail() {
  const [isChat, setIsChat] = useState(true);
  const { socket, zoomImg } = useSelector(state => state.chat);
  const { userInfo } = useSelector(state => state.user);
  const { contentId } = useParams();
  const {
    isError,
    isLoading,
    data: contentDetail,
    isSuccess,
  } = useQuery(['content', contentId], () => getContentAPI(contentId), {
    refetchOnWindowFocus: false,
    retry: 0,
  });
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isSuccess) {
    return (
      <>
        {zoomImg ? <ZoomImage imgUrl={zoomImg} /> : null}
        <Header />
        <Container>
          <article>
            <h1 className="content-title">{contentDetail.data.data.title}</h1>
            <div className="user-info">
              <Avatar
                className="user-profile"
                src={
                  contentDetail.data.data.userInfo.profile
                    ? contentDetail.data.data.userInfo.profile
                    : 'https://joeschmoe.io/api/v1/random'
                }
              />
              <span>{contentDetail.data.data.userInfo.username}</span>
              <span className="updateAt">
                {contentDetail.data.data.updatedAt}
              </span>
            </div>
            <div className="tag">{contentDetail.data.data.stack}</div>
            <Viewer initialValue={contentDetail.data.data.content} />
          </article>
          {isChat ? (
            <Chat
              socket={socket}
              chattings={contentDetail.data.data.chattings}
              userInfo={userInfo || null}
              room={contentId}
              handleClose={setIsChat}
            />
          ) : (
            <CommentOutlined
              onClick={() => setIsChat(true)}
              className="chat-icon"
            />
          )}
        </Container>
      </>
    );
  }
  return <h1>404</h1>;
}

export default ContentDetail;
