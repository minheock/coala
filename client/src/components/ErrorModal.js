import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { INIT_ERROR_MESSAGE } from '../reducer/modal';

const Modal = styled.div`
  display: flex;
  top: 0.5rem;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  z-index: 100;
  width: 288px;
  height: 60px;
  color: white;
  background-color: #e15f41;
  .error-message {
    font-size: 16px;
    padding-left: 10px;
  }
  .close-icon {
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    font-weight: 700;
    cursor: pointer;
  }
  .close-progress {
    position: absolute;
    bottom: 0px;
    height: 4px;
    background: #596275;
    animation: close-progress 3s linear;
    animation-fill-mode: forwards;
  }
  /* &:hover {
    .close-progress {
      animation-play-state: paused;
    }
  } */
  @keyframes close-progress {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
`;

class Timer {
  constructor(callback, delay) {
    this.remain = delay;
    this.callback = callback;
    this.start = Date.now();
    this.id = setTimeout(callback, delay);
  }

  // 일시정지
  pause() {
    clearTimeout(this.id);
    this.remain = Date.now() - this.start;
    console.log(this.remain);
  }

  // 재개
  resume() {
    clearTimeout(this.id);
    this.start = Date.now();
    this.id = setTimeout(this.callback, this.remain);
    console.log(this.remain);
  }
}

function ErrorModal({ message }) {
  const dispatch = useDispatch();
  const initError = () =>
    dispatch({
      type: INIT_ERROR_MESSAGE,
    });
  useEffect(() => {
    setTimeout(() => {
      initError();
    }, 3000);
  }, []);

  const modalRef = useRef();

  return (
    <Modal ref={modalRef}>
      <CloseOutlined onClick={initError} className="close-icon" />
      <div className="error-message">{message}</div>
      <div className="close-progress"> </div>
    </Modal>
  );
}

export default ErrorModal;
