import React from 'react';
import { Card, Avatar, Divider, Tag } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { SView, MView } from '../config';

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
    position: absolute;
    right: 0.5rem;
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

const { Meta } = Card;

function Content({ contentInfo }) {
  const { profile, username } = contentInfo.userInfo;
  const { thumbnail, updatedAt, stack, title, description, likers, done } =
    contentInfo;
  const customUpdate = updatedAt.split(' ')[0];
  return (
    <CardContainer
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
          <div className="heart-icon">
            <HeartFilled /> {likers.length}
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default Content;
