import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { INIT_ZOOM_CHAT_IMAGE } from '../reducer/chat';

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 5, 12, 0.5);
  z-index: 100;
  justify-content: center;
  align-items: center;
  .img-box {
    display: flex;
    justify-content: center;
    .zoom-img {
      max-width: 90%;
      max-height: 90%;
    }
    .close-zoomimg {
      position: absolute;
      font-size: 40px;
      right: 0.2rem;
      top: 0.2rem;
      font-weight: 700;
      color: white;
      cursor: pointer;
    }
  }
`;

function ZoomImage({ imgUrl }) {
  const dispatch = useDispatch();
  const closeZoomImage = () => {
    dispatch({
      type: INIT_ZOOM_CHAT_IMAGE,
    });
  };
  return (
    <Container>
      <div className="img-box">
        <CloseOutlined onClick={closeZoomImage} className="close-zoomimg" />
        <img className="zoom-img" alt="zoom-img" src={imgUrl} />
      </div>
    </Container>
  );
}

export default ZoomImage;
