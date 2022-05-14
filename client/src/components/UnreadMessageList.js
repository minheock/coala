import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { readUserAlarm } from '../api/user';
import { CoalaGreen, CoalaGrey } from '../config';
import { SET_READ_CHAT } from '../reducer/chat';
import { SET_READ_COMMENTS } from '../reducer/content';

const Container = styled.div`
  position: absolute;
  -webkit-box-shadow: -12px 2px 21px -9px rgba(0, 0, 0, 0.33);
  box-shadow: -12px 2px 21px -9px rgba(0, 0, 0, 0.33);
  width: 180px;
  top: 10px;
  right: 11.2rem;
  z-index: 1000;
  background-color: #ffffff;
  .link {
    color: black;
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0;
    li {
      position: relative;
      padding-left: 10px;
      line-height: 3rem;
      font-size: 16px;
      font-weight: 500;
      height: 48px;
      width: 100%;
      transition: 0.3s ease-in;
      cursor: pointer;
    }
    li:hover {
      background-color: ${CoalaGrey};
      color: ${CoalaGreen};
    }
    .unreadMessage-Cnt {
      position: absolute;
      top: 0.7rem;
      right: 0.5rem;
      display: inline-block;
      background-color: red;
      color: white;
      line-height: 20px;
      height: 20px;
      width: 20px;
      text-align: center;
      font-size: 11px;
      border-radius: 50%;
    }
  }
`;

function UnreadMessageList({ unreadMessage, type }) {
  const dispatch = useDispatch();
  const { checkUnreadDate } = useSelector(state => state.user);
  const navigator = useNavigate();
  const handleReadCheck = async postId => {
    const readData = {
      postId,
      check: checkUnreadDate,
      type,
    };
    await readUserAlarm(readData);
    if (type === 'comment') {
      dispatch({
        type: SET_READ_COMMENTS,
        data: +postId,
      });
    } else if (type === 'chat') {
      dispatch({
        type: SET_READ_CHAT,
        data: +postId,
      });
    }

    navigator(`/content/${postId}`);
  };

  return (
    <Container>
      <ul>
        {unreadMessage.map(message => (
          <li
            key={message.postId}
            onClick={() => handleReadCheck(message.postId)}
          >
            {message.title.slice(0, 8)}...
            <div className="unreadMessage-Cnt">{message.count}</div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default UnreadMessageList;
