import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';

const Chatroom = styled.div`
  background-color: white;
  position: fixed;
  right: 0px;
  width: 330px;
  height: 550px;
  border: 1px solid black;
  margin-left: 0.5rem;
`;

function Chat({ socket, room, userInfo }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.emit('join_room', room);
  }, []);
  console.log(userInfo);
  // 메시지 전송 메서드
  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room,
        author: userInfo.username,
        profile: userInfo.profile,
        userId: userInfo.id,
        message: currentMessage,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now(),
        ).getMinutes()}`,
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
  }, [socket]);

  return (
    <Chatroom>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map(messageContent => (
            <div
              className="message"
              id={userInfo.username === messageContent.author ? 'you' : 'other'}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>

      <div className="chat-footer">
        {userInfo ? (
          <>
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={event => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={event => {
                event.key === 'Enter' && sendMessage();
              }}
            />
            <button type="button" onClick={sendMessage}>
              &#9658;
            </button>
          </>
        ) : (
          <span>로그인후 사용해주세요.</span>
        )}
      </div>
    </Chatroom>
  );
}

export default Chat;
