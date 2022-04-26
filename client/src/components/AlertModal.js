import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { INIT_MESSAGE } from '../reducer/modal';

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
  background-color: ${props =>
    props.state === 'error' ? '#e15f41' : '#2ed573'};
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
    background: ${props => (props.state === 'error' ? '#c44569' : '#7bed9f')};
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

function AlertModal({ message, state }) {
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initSuccess = () => {
    dispatch({
      type: INIT_MESSAGE,
    });
    clearTimeout(timeoutId);
    navigate('/');
  };
  const initError = () => {
    dispatch({
      type: INIT_MESSAGE,
    });
    clearTimeout(timeoutId);
  };

  useEffect(() => {
    setTimeoutId(
      setTimeout(() => {
        if (state === 'error') initError();
        else initSuccess();
      }, 3000),
    );
  }, []);

  const modalRef = useRef();

  return (
    <Modal state={state} ref={modalRef}>
      <CloseOutlined
        onClick={state === 'error' ? initError : initSuccess}
        className="close-icon"
      />
      <div className="error-message">{message}</div>
      <div className="close-progress"> </div>
    </Modal>
  );
}

export default AlertModal;
