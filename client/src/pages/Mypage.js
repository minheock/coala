import { useState, useEffect, useRef } from 'react';
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
import SignoutModal from '../components/SignoutModal';
import { uploadFiles } from '../firebase';
import { SView } from '../config';

function Mypage() {
  const [info, setInfo] = useState(false);
  const [out, setout] = useState(false);
  const [editValue, setValue] = useState({
    userName: '',
    currentPw: '',
    editurePw: '',
  });
  const { userInfo } = useSelector(state => state.user);
  const editMutation = useMutation(edituserAPI);
  const editPwMutation = useMutation(editpasswordAPI);
  const { mainContents } = useSelector(state => state.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();

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
  };
  const editPwSubmit = e => {
    e.preventDefault();
    if (editValue.currentPw && editValue.editurePw) {
      editPwMutation.mutate({
        password: editValue.currentPw,
        newpassword: editValue.editurePw,
      });
    }
  };

  useEffect(() => {
    if (editMutation.isSuccess) {
      dispatch({
        type: EDIT_USERINFO_SUCCESS,
        data: editMutation.data.data.data,
      });
      alert('닉네임을 변경했습니다');
    } else if (editMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: editMutation.error.response.data.message,
      });
    }
  }, [editMutation.status]);
  useEffect(() => {
    if (editPwMutation.isSuccess) {
      dispatch({
        type: EDIT_USERINFO_SUCCESS,
        data: editPwMutation.data.data.data,
      });
      alert('비밀번호를 변경했습니다');
    } else if (editPwMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: editPwMutation.error.response.data.message,
      });
    }
  }, [editPwMutation.status]);
  // 이미지
  useEffect(() => {
    if (userRef.current) {
      userRef.current.getInstance().removeHook('addImageBlobHook');
      userRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          // 이미지 파이어베이스 업로드
          // callback(data.location, 'imageURL') 은 업로드에 성공한 이미지의 URL주소를 담아 ![](주소) 형식으로 담아주는 함수를 의미합니다.
          uploadFiles(blob).then(imgPath => {
            callback(imgPath, 'imageURL');
          });
        });
    }
  }, []);
  console.log(userInfo);
  if (userInfo) {
    return (
      <>
        {out ? <SignoutModal /> : <span />}
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
                  <span className="Withdrawal" onClick={() => setout(!out)}>
                    계정삭제
                  </span>
                  {/* {out ? <ConfirmModal/> : <div>} */}
                  {editValue.userName ? (
                    <button type="submit" className="editPush">
                      이름 변경
                    </button>
                  ) : null}
                  {editValue.currentPw && editValue.editurePw ? (
                    <button
                      type="button"
                      className="edit-pw-submit"
                      onClick={editPwSubmit}
                    >
                      비밀번호 변경
                    </button>
                  ) : null}
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
            <button
              type="button"
              className="editInfo"
              data-tooltip-text={
                !info
                  ? '유저정보를 바꿀수 있습니다'
                  : '클릭하면 유저정보가 나옵니다'
              }
              onClick={InfoHandeler}
            >
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
  .editPush,
  .edit-pw-submit {
    position: relative;
    color: grey;
    border-radius: 4px;
    /* background: #a5e5cf; */
    background-color: rgba(255, 255, 255, 0.1);
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
    /* top: 3px; */
    bottom: 30px;
    right: 30px;
    position: absolute;
    font-size: 10px;
    color: red;
    cursor: pointer;
    transition: 0.1s;
  }
  .Withdrawal:hover {
    font-size: 11px;
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
  [data-tooltip-text]:hover:after {
    background-color: #000000;
    background-color: rgba(50, 50, 50, 0.9);

    -webkit-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
    -moz-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
    box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    color: #ffffff;
    font-size: 12px;
    content: attr(data-tooltip-text);
    margin-bottom: 10px;
    top: 130%;
    left: 0;
    padding: 7px 12px;
    position: absolute;
    width: auto;
    min-width: 150px;
    max-width: 300px;
    /* word-wrap: break-word; */
    z-index: 9999;
  }

  @media screen and (max-width: ${SView + 100}px) {
    .userInfoContaner {
      width: 500px;
    }
    .userInfoBox {
      width: 200px;
    }
    .profileBox {
      width: 250px;
    }
    .userProfileEdit,
    .userProfile {
      transform: scale(85%);
    }
  }
`;

export default Mypage;
