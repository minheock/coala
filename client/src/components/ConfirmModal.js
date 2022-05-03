import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { CoalaGreen } from '../config';
import { solvedContentAPI, deleteContentAPI } from '../api/content';
import { SET_ERROR_MESSAGE } from '../reducer/modal';
import { EDIT_CONTENT_REQUEST } from '../reducer/content';

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 5, 12, 0.5);
  z-index: 100;
  justify-content: center;
  align-items: center;
  .confirm-box {
    position: relative;
    padding: 1rem;
    width: 400px;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    .btn-box {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      button {
        width: 63px;
        height: 28px;
        margin-left: 1rem;
        cursor: pointer;
      }
      #cancel-btn {
        background-color: transparent;
      }
      #delete-btn {
        background-color: #e15f41;
        color: white;
        border: none;
      }
      #edit-btn {
        width: 67px;
        background-color: ${CoalaGreen};
        color: white;
        border: none;
      }
    }
  }
`;
function ConfirmModal({
  confirm,
  closeConfirm,
  contentId,
  refetch,
  contentData,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const solvedMutation = useMutation(() => solvedContentAPI(contentId));
  const deleteMutation = useMutation(() => deleteContentAPI(contentId));
  const handleClose = () => {
    closeConfirm('');
  };
  const handleSolved = () => {
    solvedMutation.mutate({});
  };
  const handleDelete = () => {
    deleteMutation.mutate({});
  };
  const handleEdit = () => {
    dispatch({
      type: EDIT_CONTENT_REQUEST,
      data: contentData,
    });
    navigate('/edit');
  };
  useEffect(() => {
    if (solvedMutation.isSuccess) {
      refetch();
      closeConfirm('');
    } else if (deleteMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: '요청 실패.',
      });
    }
  }, [solvedMutation.status]);

  useEffect(() => {
    if (deleteMutation.isSuccess) {
      closeConfirm('');
      navigate('/');
    } else if (deleteMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: '게시물 삭제 실패.',
      });
    }
  }, [deleteMutation.status]);

  return (
    <Container>
      <div className="confirm-box">
        {confirm === 'delete' ? (
          <>
            {' '}
            <h2>게시글 삭제</h2>
            <h3>정말로 삭제하시겠습니까?</h3>
            <div className="btn-box">
              <button onClick={handleClose} id="cancel-btn" type="button">
                취소
              </button>
              <button onClick={handleDelete} id="delete-btn" type="button">
                삭제
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>해결완료!</h2>
            <h3>
              더 좋은 개발문화를 위해 문제 해결방법을 게시글에 추가하는건
              어떨까요?
            </h3>
            <div className="btn-box">
              <button onClick={handleSolved} id="cancel-btn" type="button">
                다음에
              </button>
              <button onClick={handleEdit} id="edit-btn" type="button">
                수정하기
              </button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default ConfirmModal;
