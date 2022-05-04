import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ERROR_MESSAGE, SET_SUCCESS_MESSAGE } from '../reducer/modal';
import { edituserAPI, editpasswordAPI, signoutAPI } from '../api/user';
import Contents from '../components/Contents';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { EDIT_USERINFO_SUCCESS } from '../reducer/user';

function Mypage() {
  const [info, setInfo] = useState(false);
  const [editValue, setValue] = useState({
    userName: '',
    currentPw: '',
    editurePw: '',
  });
  const { userInfo } = useSelector(state => state.user);
  const editMutation = useMutation(edituserAPI);
  const editPwMutation = useMutation(editpasswordAPI);
  const signoutMutation = useMutation(signoutAPI);
  const { mainContents } = useSelector(state => state.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  function edithandler(e, key) {
    setValue({ ...editValue, [key]: e.target.value });
  }

  const InfoHandeler = () => {
    setInfo(!info);
  };
  const editSubmit = e => {
    console.log('-------', editValue);
    e.preventDefault();
    if (editValue.userName) {
      editMutation.mutate({
        username: editValue.userName,
        profile: 'https://joeschmoe.io/api/v1/random',
      });
    } else {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: '입력된 값이 없습니다.',
      });
    }
    // if (editValue.currentPw && editValue.editurePw) {
    //   editPwMutation.mutate({
    //     password: editValue.currentPw,
    //     newpassword: editValue.editurePw,
    //   });
    // }
  };

  const signoutSubmit = e => {
    console.log('-------', editValue);
    e.preventDefault();
    signoutMutation.mutate({});
  };

  useEffect(() => {
    if (editMutation.isSuccess || editPwMutation.isSuccess) {
      console.log(editMutation.data.data.data);
      dispatch({
        type: EDIT_USERINFO_SUCCESS,
        data: editMutation.data.data.data,
      });
    } else if (editMutation.isError || editPwMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: editMutation.error.response.data.message,
      });
    }
  }, [editMutation.status, editPwMutation.status]);
  if (userInfo) {
    return (
      <>
        <Header />
        <NavBar />
        <MypageWrapper>
          <span className="mypageLogo">MyPage</span>
          <div className="userInfoContaner">
            <div className="profileBox">
              <div className="imgBox">
                <img
                  className="userProfile"
                  alt="profile"
                  src={userInfo.profile}
                />
                <div className="userProfileEdit">
                  <p className="editText">이미지 변경</p>
                </div>
              </div>
            </div>
            {info ? (
              <form onSubmit={editSubmit}>
                <div className="userInfoBox change">
                  <div className="form">
                    <input
                      className="editInput"
                      onChange={e => edithandler(e, 'userName')}
                      type="text"
                    />
                    <span className="user-name">닉네임</span>
                  </div>
                  <div className="form">
                    <input
                      className="editInput-pw"
                      type="password"
                      onChange={e => edithandler(e, 'currentPw')}
                    />
                    <span className="user-email">현재 비밀번호</span>
                  </div>
                  <div className="form">
                    <input
                      className="editInput-succes"
                      type="password"
                      onChange={e => edithandler(e, 'editurePw')}
                    />
                    <span className="user-password">변경할 비밀번호</span>
                  </div>
                  <button type="button" className="Withdrawal">
                    회원탈퇴
                  </button>
                  <button type="submit" className="editPush">
                    저장
                  </button>
                </div>
              </form>
            ) : (
              <div className="userInfoBox">
                <span className="userinfoName">
                  {userInfo.username}님 반갑습니다.
                </span>
                <br />
                <span className="userinfoId">{userInfo.email}</span>
                <br />
                <span className="userText">{`내 게시물 총${3}개`}</span>
              </div>
            )}
            <button type="button" className="editInfo" onClick={InfoHandeler}>
              <EditOutlined className="icon" />
            </button>
          </div>
          {/* <div className="userContents" /> */}
        </MypageWrapper>
        <Contents mainContents={mainContents} />
      </>
    );
  }
  return null;
}
const MypageWrapper = styled.div`
  background-image: url('https://i.pinimg.com/736x/a5/d8/93/a5d89325265e24e0d3852e622b0739d9.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 100px;
  .mypageLogo {
    position: absolute;
    color: #999999;
    top: 120px;
    left: 280px;
    width: 70%;
    border-bottom: 1px solid #999999;
    font-size: 28px;
    font-style: sans-serif;
  }
  .userInfoContaner {
    width: 300px;
    height: 300px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    border-radius: 45px;
    margin-top: 100px;
    height: 300px;
    width: 800px;
  }
  .profileBox {
    height: 100%;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    .userProfile {
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      height: 240px;
      width: 240px;
      border-radius: 100%;
      border: 1px whitesmoke solid;
      text-align: center;
    }
    .imgBox .userProfileEdit {
      padding-top: 13%;
      transition: opacity 0.35s ease-in-out;
    }
    .imgBox:hover .userProfileEdit {
      opacity: 1;
    }
    .userProfileEdit {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      font-weight: 600;
      text-align: center;
      color: white;
      height: 240px;
      width: 240px;
      border-radius: 100%;
      /* left: 10px; */
      top: 30px;
      font-size: 20px;
      position: absolute;
    }
    .editText {
      align-items: center;
      justify-content: center;
    }
    /* .userId,
    .userText,
    .userProfile,
    .userProfileEdit,
    .editText {
      margin-top: 40%;
    } */
  }
  .change {
  }
  .userInfoBox {
    font-family: 'Convergence', sans-serif;
    /* position: relative; */
    padding-top: 40px;
    height: 100%;
    width: 300px;
    /* border: 1px solid black; */
    .form {
      position: relative;
      margin-top: 10px;
    }
    .editInput,
    .editInput-pw,
    .editInput-succes {
      /* margin-top: 3px; */
      position: relative;
      top: 0;
      left: 0;
      height: 80%;
      width: 100%;
      /* border-radius: 9px; */
      border: 2px solid #999999;
      border-top: none;
      border-left: none;
      border-right: none;
      font-family: inherit;
      outline: none;
      font-size: 14px;
      padding: 0.8rem;
      padding-left: 0.7rem;
      background-color: rgba(255, 255, 255, 0);
    }
    .user-name,
    .user-email,
    .user-password {
      position: absolute;
      font-weight: 500;
      font-size: 15px;
      font-family: sans-serif;
      left: 0.7rem;
      top: 0.8rem;
      padding: 0, 0.5rem;
      cursor: text;
      color: grey;
      transition: 0.3s ease-in-out;
      z-index: -1;
      border-radius: 100%;
    }

    .editInput:focus ~ .user-name,
    .editInput-pw:focus ~ .user-email,
    .editInput-succes:focus ~ .user-password {
      /* border: dotted 1px blue; */
      /* background-color: gray; */
      /* color: #555555; */
      top: -0.2rem;
      font-size: 0.7rem;
      left: 0.6rem;
    }
  }
  .editPush {
    position: relative;
    color: white;
    border-radius: 4px;
    background: #a5e5cf;
    left: 185px;
    margin-top: 10px;
    border: 1px solid #999999;
    box-shadow: 1px 1px 2px black;
    &:active {
      bottom: -1px;
      box-shadow: none;
    }
  }
  .Withdrawal {
    position: relative;
    border-radius: 4px;
    color: white;
    background: #f44711;
    margin-right: 10px;
    left: 180px;
    margin-top: 10px;
    border: 1px solid #999999;
    box-shadow: 1px 1px 2px black;
    &:active {
      bottom: -1px;
      box-shadow: none;
    }
  }
  .editInfo {
    background-color: rgba(255, 255, 255, 0.1);
    color: #555555;
    border-top: none;
    border-left: none;
    font-weight: 300;
    font-size: 17px;
    backdrop-filter: blur(10px);
    position: absolute;
    top: 10px;
    right: 25px;
    height: 28px;
    width: 40px;
    border-radius: 10px;
    cursor: pointer;
  }
  .editInfo:hover .icon {
    color: green;
    font-size: 19px;
  }

  .userContents {
    margin-top: 100px;
    height: 300px;
    width: 500px;
    border: 1px solid;
  }
`;

export default Mypage;
