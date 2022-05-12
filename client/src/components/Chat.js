import React, { useState, useEffect, useRef } from 'react';
import { Avatar, Divider, Button } from 'antd';
import {
  CloseOutlined,
  FileImageOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useDispatch } from 'react-redux';
import { ZOOM_CHAT_CODE, ZOOM_CHAT_IMAGE } from '../reducer/chat';
import { uploadChatFiles } from '../firebase';
import { SView } from '../config';

const Chatroom = styled.div`
  background-color: white;
  position: fixed;
  -webkit-box-shadow: 2px 1px 17px -3px rgba(0, 0, 0, 0.42);
  box-shadow: 2px 1px 17px -3px rgba(0, 0, 0, 0.42);
  right: 0.2rem;
  width: 530px;
  height: 600px;
  /* border-radius: 10px 10px 0px 0px; */
  margin-left: 0.5rem;
  .close-btn {
    position: absolute;
    top: 0.2rem;
    font-size: 15px;
    right: 0.2rem;
    cursor: pointer;
  }
  #divider {
    margin-bottom: 3px !important;
  }
  .message-container {
    padding-left: 3px;
    padding-right: 3px;
    height: 510px;
    overflow-y: auto;
  }
  .input-box {
    display: flex;
    .icons-box {
      display: flex;
      align-items: center;
      .input-icon {
        cursor: pointer;
        margin-left: 0.2rem;
        font-size: 23px;
      }
    }

    .input-message {
      margin-left: 0.5rem;
      width: 80%;
      height: 35px;
      border-radius: 3px;
    }
    .input-message:focus {
      outline: none;
    }

    button {
      width: 68px;
      border-style: none;
      background-color: #63cdda;
      color: white;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  .message {
    .message-info {
      display: flex;
    }
    .message-content {
      margin-bottom: 5px;
      color: #f5f6fa;
    }
    .chat-img-box {
      cursor: pointer;
      padding: 2px;
      .chat-img {
        max-width: 248px;
        max-height: 220px;
      }
    }
  }
  .code-block {
    background-color: gray;
    margin: 2px;
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
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
  .img-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 40px;
    width: 100%;
    align-items: center;
    .img-preview {
      display: block;
      max-width: 255px;
      max-height: 229px;
    }
    .img-preview-btn {
      width: 140px;
    }
  }
  #image-upload {
    display: none;
  }

  @media screen and (max-width: ${SView}px) {
    & {
      width: 400px;
      height: 550px;
    }
    .message-container {
      height: 460px;
    }
  }
`;

function Chat({
  socket,
  room,
  userInfo,
  chattings,
  handleClose,
  handleEditCodePage,
  sendEditCode,
  handleSendEditCode,
  isDone,
}) {
  const dispatch = useDispatch();
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  console.log(messageList);
  // 이미지 영역.
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const imgUploadRef = useRef();
  const uploadFiles = e => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };

  const handlezoomImage = imgUrl => {
    dispatch({
      type: ZOOM_CHAT_IMAGE,
      data: imgUrl,
    });
  };
  const deleteImage = () => {
    setImage('');
  };

  const sendImageToServer = () => {
    setUploading(true);
    uploadChatFiles(image.image_file, room).then(async dataurl => {
      console.log(dataurl);
      let minutes = new Date(Date.now()).getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      const imgData = {
        room,
        author: userInfo.username,
        profile: userInfo.profile,
        userId: userInfo.id,
        message: null,
        image: dataurl,
        code: null,
        time: `${new Date(Date.now()).getHours()}:${minutes}`,
      };
      await socket.emit('send_message', imgData);
      setMessageList(list => [...list, imgData]);
      setImage('');
      setUploading(false);
    });
  };

  const handlesubmitImg = () => {
    imgUploadRef.current.click();
  };
  // 이미지 영역.

  // 코드 블럭 영역
  useEffect(async () => {
    if (sendEditCode) {
      // code Editor에서 code 작성해서 보내줬을 경우.
      console.log(sendEditCode);
      if (sendEditCode.editorValue !== '') {
        let minutes = new Date(Date.now()).getMinutes();
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
        const codeMessageData = {
          room,
          author: userInfo.username,
          profile: userInfo.profile,
          userId: userInfo.id,
          message: null,
          image: null,
          code: JSON.stringify(sendEditCode),
          time: `${new Date(Date.now()).getHours()}:${minutes}`,
        };
        await socket.emit('send_message', codeMessageData);
        setMessageList([...messageList, codeMessageData]);
        handleSendEditCode('');
      }
    }
  }, [sendEditCode]);

  const handleEditCode = () => {
    handleEditCodePage(true);
  };

  const handleZoomCode = codeInfo => {
    dispatch({
      type: ZOOM_CHAT_CODE,
      data: codeInfo,
    });
  };

  useEffect(() => {
    const messages = chattings.map(chatting => ({
      id: chatting.id,
      room,
      author: chatting.user.username,
      profile: chatting.user.profile,
      userId: chatting.userId,
      message: chatting.content,
      image: chatting.image,
      code: chatting.code ? JSON.parse(chatting.code) : null,
      time: chatting.time,
    }));
    setMessageList([...messages]);
    socket.emit('join_room', {
      room,
      author: userInfo.username,
      userId: userInfo.id,
    });
    // 유저 입장알림.
    socket.on('send_connect', data => {
      setMessageList(list => [...list, data]);
    });
  }, []);
  // 메시지 전송 메서드
  const sendMessage = async () => {
    if (currentMessage !== '') {
      //   console.log(currentMessage);
      let customMessage = '';
      for (let i = 0; i < currentMessage.length; i++) {
        if (i > 0 && i % 35 === 0) {
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
        image: null,
        code: null,
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
        <CloseOutlined
          onClick={() => handleClose(false)}
          className="close-btn"
        />
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map(messageContent => (
            <div
              key={messageContent.id}
              className="message"
              id={userInfo?.id === messageContent.userId ? 'you' : 'other'}
            >
              {userInfo?.id === messageContent.userId ? null : (
                <div className="message-userInfo">
                  <p id="author">{messageContent.author}</p>
                  <Avatar src={messageContent.profile} />
                </div>
              )}
              <div className="message-info">
                <div className="message-content">
                  {messageContent.image ? (
                    <div
                      onClick={() => handlezoomImage(messageContent.image)}
                      className="chat-img-box"
                    >
                      <img
                        className="chat-img"
                        alt="chat-img"
                        src={messageContent.image}
                      />
                    </div>
                  ) : null}
                  {messageContent.message ? (
                    <span>{messageContent.message}</span>
                  ) : null}
                  {messageContent.code ? (
                    <div
                      onClick={() => handleZoomCode(messageContent.code)}
                      className="code-block"
                    >
                      <p>Code:</p>
                      <p>{messageContent.code.language}</p>
                    </div>
                  ) : null}
                </div>
                <div className="message-meta">
                  <span id="time">{messageContent.time}</span>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      {image ? (
        <div className="img-wrapper">
          <img
            alt="preview-img"
            className="img-preview"
            src={image.preview_URL}
          />
          <Button
            className="img-preview-btn"
            type="primary"
            onClick={deleteImage}
            danger
          >
            취소
          </Button>
          <Button
            loading={uploading}
            className="img-preview-btn"
            type="ghost"
            onClick={sendImageToServer}
          >
            확인
          </Button>
        </div>
      ) : null}

      <div className="chat-footer">
        <input
          ref={imgUploadRef}
          type="file"
          id="image-upload"
          accrpt="img/*"
          onChange={uploadFiles}
        />
        {userInfo && !isDone ? (
          <div className="input-box">
            <div className="icons-box">
              <FileImageOutlined
                onClick={handlesubmitImg}
                className="input-icon img-icon"
              />
              <CodeOutlined
                onClick={handleEditCode}
                className="input-icon code-icon"
              />
            </div>
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
            <button onClick={sendMessage} type="button">
              전송
            </button>
          </div>
        ) : (
          <span>{isDone ? '' : '로그인 후 사용해주세요'}</span>
        )}
      </div>
    </Chatroom>
  );
}

export default Chat;
