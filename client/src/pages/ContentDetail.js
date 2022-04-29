import React from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Avatar } from 'antd';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getContentAPI } from '../api/content';
import Header from '../components/Header';
import { CoalaGreen, CoalaGrey, SView } from '../config';
import Chat from '../components/Chat';

const Container = styled.main`
  width: 95%;
  margin: auto;
  display: flex;
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
  const { socket } = useSelector(state => state.chat);
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
  // useEffect(() => {
  //   if (contentDetail) {
  //     contentDetail = data.data;
  //   }
  // }, [isSuccess]);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isSuccess) {
    return (
      <>
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
          <Chat
            socket={socket}
            chattings={contentDetail.data.data.chattings}
            userInfo={userInfo || null}
            room={contentId}
          />
        </Container>
      </>
    );
  }
  return <h1>404</h1>;
}

export default ContentDetail;
