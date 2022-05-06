import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { signoutAPI } from '../api/user';
import { LOG_OUT_SUCCESS } from '../reducer/user';

function SignoutModal({ setout }) {
  const signoutMutation = useMutation(signoutAPI);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signoutSubmit = e => {
    e.preventDefault();
    signoutMutation.mutate({});
    // alert('삭제되었습니다.');
    // window.location.reload();
    // navigate('/');
  };
  useEffect(() => {
    if (signoutMutation.isSuccess) {
      dispatch({
        type: LOG_OUT_SUCCESS,
      });
      navigate('/');
    }
  }, [signoutMutation.status]);
  return (
    <div>
      <Container>
        <form onSubmit={signoutSubmit}>
          <div className="signout-box">
            <h2>계정삭제</h2>
            <h3>정말 계정을 삭제하시겠습니까?</h3>
            <div className="btn-box">
              <button
                id="cancel-btn"
                type="button"
                onClick={() => setout(false)}
              >
                취소
              </button>
              <button id="Withdrawal-btn" type="submit">
                삭제
              </button>
            </div>
          </div>
        </form>
      </Container>
      )
    </div>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 200vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  justify-content: center;
  align-items: center;
  .signout-box {
    position: relative;
    padding: 1rem;
    top: -55vh;
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
        width: 67px;
        background-color: mediumspringgreen;
        /* color: white; */
        border: 1px solid grey;
      }
      #Withdrawal-btn {
        width: 67px;
        background-color: red;
        color: white;
        border: 1px solid grey;
      }
    }
  }
`;

export default SignoutModal;
