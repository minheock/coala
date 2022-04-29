import React, { useState, useEffect } from 'react';
import { Avatar, Divider, message } from 'antd';
import styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';

const Chatroom = styled.div`
  background-color: white;
  position: fixed;
  right: 0px;
  width: 330px;
  height: 550px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 0.5rem;
  #divider {
    margin-bottom: 0px !important;
  }
  .message-container {
    height: 467px;
    overflow-y: auto;
  }
  .input-message {
    position: absolute;
    width: 100%;
    height: 30px;
    border: 1px solid black;
    bottom: 0px;
    border-radius: 3px;
  }
  .input-message:focus {
    outline: none;
  }
  .message {
    .message-info {
      display: flex;
    }
    .message-content {
      margin-bottom: 5px;
      color: #f5f6fa;
    }
  }
  #you {
    .message-info {
      flex-direction: row-reverse;
    }
    .message-content {
      margin-right: 0.2rem;
      border-radius: 10px 0px 10px 10px;
      padding: 0px 8px 0px 8px;
      background-color: #63cdda;
    }
    #time {
      margin-right: 3px;
    }
  }
  #other {
    .message-userInfo {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      #author {
        margin-left: 0.3rem;
      }
    }
    .message-content {
      margin-left: 2rem;
      border-radius: 0px 10px 10px 10px;
      padding: 0px 8px 0px 8px;
      background-color: #8c7ae6;
    }
    #time {
      margin-left: 3px;
    }
  }
`;

function Chat({ socket, room, userInfo, chattings }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const messages = chattings.map(chatting => ({
      id: chatting.id,
      room,
      author: chatting.user.username,
      profile: chatting.user.profile,
      userId: chatting.userId,
      message: chatting.content,
      time: chatting.time,
    }));
    setMessageList([...messages]);
    socket.emit('join_room', room);
  }, []);
  // 메시지 전송 메서드
  const sendMessage = async () => {
    if (currentMessage !== '') {
      //   console.log(currentMessage);
      let customMessage = '';
      for (let i = 0; i < currentMessage.length; i++) {
        if (i > 0 && i % 28 === 0) {
          customMessage += `\n ${currentMessage[i]}`;
        } else {
          customMessage += currentMessage[i];
        }
      }
      //   console.log(customMessage);
      let minutes = new Date(Date.now()).getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      const messageData = {
        room,
        author: userInfo.username,
        profile: userInfo.profile,
        userId: userInfo.id,
        message: customMessage,
        time: `${new Date(Date.now()).getHours()}:${minutes}`,
      };
      await socket.emit('send_message', messageData);
      setMessageList(list => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', data => {
      setMessageList(list => [...list, data]);
    });
  }, []);

  return (
    <Chatroom>
      <div className="chat-header">
        <h3>Coala Chat</h3>
        <Divider id="divider" />
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map(messageContent => (
            <div
              key={messageContent.id}
              className="message"
              id={userInfo.id === messageContent.userId ? 'you' : 'other'}
            >
              {userInfo.id === messageContent.userId ? null : (
                <div className="message-userInfo">
                  <p id="author">{messageContent.author}</p>
                  <Avatar src={messageContent.profile} />
                </div>
              )}
              <div className="message-info">
                <div className="message-content">
                  <span>{messageContent.message}</span>
                </div>
                <div className="message-meta">
                  <span id="time">{messageContent.time}</span>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>

      <div className="chat-footer">
        {userInfo ? (
          <input
            className="input-message"
            type="text"
            value={currentMessage}
            placeholder="메시지 입력해주세요"
            onChange={event => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={event => {
              event.key === 'Enter' && sendMessage();
            }}
          />
        ) : (
          <span>로그인후 사용해주세요.</span>
        )}
      </div>
    </Chatroom>
  );
}

export default Chat;
