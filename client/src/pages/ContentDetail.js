import React, { useEffect, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Avatar, Tag } from 'antd';
import { useNavigate } from 'react-router';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { CommentOutlined } from '@ant-design/icons';
import { getContentAPI } from '../api/content';
import Header from '../components/Header';
import { CoalaGreen, CoalaGrey, SView } from '../config';
import Chat from '../components/Chat';
import ZoomImage from '../components/ZoomImage';
import ConfirmModal from '../components/ConfirmModal';
import Comments from '../components/Comments';
import CommentList from '../components/CommentList';
import { EDIT_CONTENT_REQUEST } from '../reducer/content';
import CodeEditor from '../components/CodeEditor';

const Container = styled.main`
  width: 85%;
  margin: auto;
  display: flex;
  article {
    width: 100%;
    ul {
      padding: 0;
      margin-bottom: 0px;
      li {
        list-style: none;
        display: inline-block;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        cursor: pointer;
        font-size: 16px;
      }
      li:hover {
        color: ${CoalaGreen};
      }
    }
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
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    .user-profile {
      margin-right: 5px;
    }
    .updateAt {
      display: inline-block;
      margin-left: 1rem;
    }
    .solved-tag {
      margin-left: 0.5rem;
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
      width: 98%;
    }
    article {
      width: 100%;
      margin: auto;
    }
  }
`;

function ContentDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChat, setIsChat] = useState(false);
  const [confirm, setConfirm] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [isEditCode , setIsEditCode] = useState(false);
  const { socket, zoomImg } = useSelector(state => state.chat);
  const { userInfo } = useSelector(state => state.user);
  const { contentId } = useParams();
  const {
    isError,
    isLoading,
    data: contentDetail,
    isSuccess,
    refetch,
  } = useQuery(['content', contentId], () => getContentAPI(contentId), {
    refetchOnWindowFocus: false,
    retry: 0,
  });
  // console.log(contentDetail.data.data.comments);
  const handleEdit = () => {
    dispatch({
      type: EDIT_CONTENT_REQUEST,
      data: contentDetail.data.data,
    });
    navigate('/edit');
  };

  useEffect(() => {
    if (contentDetail) {
      setCommentsList(contentDetail.data.data.comments);
    }
    //
  }, [isSuccess]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isSuccess) {
    const { id } = contentDetail.data.data.userInfo;
    const { done } = contentDetail.data.data;
    return (
      <>
        {zoomImg ? <ZoomImage imgUrl={zoomImg} /> : null}
        {confirm ? (
          <ConfirmModal
            refetch={refetch}
            confirm={confirm}
            contentId={contentId}
            closeConfirm={setConfirm}
            contentData={contentDetail.data.data}
          />
        ) : null}
        <Header />
        <Container>
          <article>
            <h1 className="content-title">{contentDetail.data.data.title}</h1>
            <div className="user-info">
              <div>
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
                <Tag className="solved-tag" color={done ? 'gold' : 'blue'}>
                  {done ? 'solved' : 'resolving'}
                </Tag>
              </div>
              {id === userInfo?.id ? (
                <div>
                  <ul>
                    {done ? null : (
                      <li onClick={() => setConfirm('solved')}>해결완료</li>
                    )}
                    <li onClick={handleEdit}>수정</li>
                    <li onClick={() => setConfirm('delete')}>삭제</li>
                  </ul>
                </div>
              ) : null}
            </div>
            <div className="tag">{contentDetail.data.data.stack}</div>
            <Viewer initialValue={contentDetail.data.data.content} />
            {done ? (
              <>
                <Comments
                  commentsList={commentsList}
                  userInfo={userInfo}
                  hadleInputComments={setCommentsList}
                  contentId={contentId}
                />
                <CommentList comments={commentsList} />
              </>
            ) : null}
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
