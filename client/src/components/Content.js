import React, { useEffect, useState } from 'react';
import { Card, Avatar, Divider, Tag } from 'antd';
import {
  HeartFilled,
  HeartOutlined,
  MessageOutlined,
  MessageFilled,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useMutation } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { SET_ERROR_MESSAGE } from '../reducer/modal';
import { SView, MView } from '../config';
import { likeAPI, unLikeAPI } from '../api/content';

const CardContainer = styled(Card)`
  width: 270px;
  height: 350px;
  cursor: pointer;
  transition: 0.2s ease-in;
  margin: 1rem 2rem 1rem 2rem;
  &:hover {
    transform: scale(1.03, 1.03);
  }
  .heart-icon {
    width: 40px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .ant-card-body {
    padding: 0 !important;
  }
  .thumbnail {
    height: 140px;
  }
  .content-text {
    padding: 5px;
    height: 150px;
    overflow-y: hidden;
  }
  .content-state {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
  .divider {
    margin-bottom: 9px;
    margin-top: 3px;
  }
  .stack-tag {
    position: absolute;
    right: -0.4rem;
    top: 0;
  }
  .solved-tag {
    position: absolute;
    right: -0.5rem;
    top: 0.3rem;
  }
  .filled-icon {
    color: red;
    cursor: pointer;
  }
  .outline-icon {
    cursor: pointer;
  }
  .user-in {
    color: green;
    position: relative;
    margin-right: 5px;
  }
  .user-out {
    position: relative;
    margin-right: 5px;
  }
  .heart-icon {
    position: relative;
    margin-right: 1px;
    right: 0.1rem;
  }
  .small-icon-box {
    display: flex;
    position: absolute;
    height: 20px;
    right: 1px;
    bottom: 0.3rem;
  }
  .total {
    color: grey;
  }
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
  .blinking {
    -webkit-animation: blink 0.5s ease-in-out infinite alternate;
    -moz-animation: blink 0.5s ease-in-out infinite alternate;
    animation: blink 0.5s ease-in-out infinite alternate;
  }
  @-webkit-keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const { Meta } = Card;

function Content({ contentInfo }) {
  const { thumbnail, updatedAt, stack, title, description, likers, done } =
    contentInfo;
  const { profile, username } = contentInfo.userInfo;
  const [totalLike, setTotalLike] = useState(likers.length);
  const [like, setlike] = useState(false);
  const customUpdate = updatedAt.split(' ')[0];
  const navigate = useNavigate();
  const { userInfo } = useSelector(state => state.user);
  const likeMutation = useMutation(likeAPI);
  const unLikeMutation = useMutation(unLikeAPI);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      if (likers.includes(userInfo.id)) setlike(true);
    }
  }, [userInfo]);

  useEffect(() => {
    if (totalLike > 999) {
      setTotalLike(`${`${totalLike / 1000}`.slice(0, 3)}k`);
    }
  }, [totalLike]);

  const handleLike = e => {
    e.stopPropagation();
    if (userInfo) {
      if (!like) {
        likeMutation.mutate({
          postId: contentInfo.id,
          userId: userInfo.id,
        });
      } else if (like) {
        unLikeMutation.mutate({
          postId: contentInfo.id,
          userId: userInfo.id,
        });
      }
    } else if (!userInfo) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: '로그인 정보가 필요합니다',
      });
    }
  };
  useEffect(() => {
    if (likeMutation.isSuccess) {
      setlike(true);
      setTotalLike(totalLike + 1);
    }
  }, [likeMutation.status]);
  useEffect(() => {
    if (unLikeMutation.isSuccess) {
      setlike(false);
      setTotalLike(totalLike - 1);
    }
  }, [unLikeMutation.status]);
  const handleDetail = () => {
    navigate(`/content/${contentInfo.id}`);
  };
  return (
    <CardContainer
      onClick={handleDetail}
      cover={
        thumbnail ? (
          <img className="thumbnail" alt="example" src={thumbnail} />
        ) : null
      }
    >
      <Tag className="stack-tag" color="green">
        {stack}
      </Tag>
      <div className="content-info">
        <div className="content-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="content-state">
          <Divider className="divider" />
          <Meta
            avatar={<Avatar src={profile} />}
            title={username}
            description={customUpdate}
          />
          <Tag className="solved-tag" color={done ? 'gold' : 'blue'}>
            {done ? 'solved' : 'resolving'}
          </Tag>
          <div className="small-icon-box">
            <div className="user-inout-box">
              {contentInfo.in ? (
                <MessageFilled className="user-in blinking" />
              ) : (
                <MessageOutlined className="user-out" />
              )}
            </div>
            <div className="heart-icon" onClick={handleLike}>
              {!like ? (
                <HeartOutlined className="outline-icon" />
              ) : (
                <HeartFilled className="filled-icon" />
              )}
              <span className="total">{totalLike}</span>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default Content;
