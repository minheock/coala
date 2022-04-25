import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

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
    animation: close-progress 4s linear;
    animation-fill-mode: forwards;
  }
  &:hover {
    .close-progress {
      animation-play-state: paused;
    }
  }
  @keyframes close-progress {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
`;

function ErrorModal({ error }) {
  return (
    <Modal>
      <CloseOutlined className="close-icon" />
      <div className="error-message">{error}</div>
      <div className="close-progress"> </div>
    </Modal>
  );
}

export default ErrorModal;
