import { useState, useEffect, useRef } from 'react';
import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ERROR_MESSAGE } from '../reducer/modal';
import { edituserAPI, editpasswordAPI } from '../api/user';
import { getContentsUserAPI } from '../api/content';
import Contents from '../components/Contents';
import Header from '../components/Header';
import LoadingContents from '../components/LoadingContents';
import { EDIT_USERINFO_SUCCESS } from '../reducer/user';
import SignoutModal from '../components/SignoutModal';
import { uploadFiles } from '../firebase';
import { SView } from '../config';
import { editUserThunk } from '../reducer';

function Mypage() {
  const [info, setInfo] = useState(false);
  const [out, setout] = useState(false);
  const [myContent, setMycontent] = useState([]);
  const { userInfo } = useSelector(state => state.user);
  const [Image, setImage] = useState(
    userInfo
      ? userInfo.profile
      : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [editValue, setValue] = useState({
    userName: '',
    currentPw: '',
    editurePw: '',
  });

  const editMutation = useMutation(edituserAPI);
  const editPwMutation = useMutation(editpasswordAPI);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();
  console.log(myContent);
  // 유저의 컨텐츠
  const { isLoading, data: contentsData } = useQuery(
    'contents',
    getContentsUserAPI,
    {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  );
  useEffect(() => {
    if (contentsData) {
      setMycontent(contentsData.data.data);
    }
  }, [contentsData]);
  useEffect(() => {
    if (!userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  // 정보수정 핸들러
  function edithandler(e, key) {
    setValue({ ...editValue, [key]: e.target.value });
  }
  function EditInputReset(e, key, key2) {
    setValue({ ...editValue, [key]: '', [key2]: '' });
  }

  const InfoHandeler = () => {
    setInfo(!info);
  };
  // 이름변경
  const editSubmit = e => {
    e.preventDefault();
    if (editValue.userName) {
      editMutation.mutate({
        username: editValue.userName,
        profile: Image,
      });
      EditInputReset(e, 'userName');
    } else {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: '입력된 값이 없습니다.',
      });
    }
  };
  // 비밀번호 변경
  const editPwSubmit = e => {
    e.preventDefault();
    if (editValue.currentPw && editValue.editurePw) {
      editPwMutation.mutate({
        password: editValue.currentPw,
        newPassword: editValue.editurePw,
      });
      if (!editPwMutation.isSuccess) {
        EditInputReset(e, 'editurePw', 'currentPw');
      }
    }
  };

  useEffect(() => {
    if (editMutation.isSuccess) {
      dispatch(editUserThunk(editMutation.data.data.data));
      setImage(editMutation.data.data.data.profile);

      setMycontent(
        myContent.map(content => {
          if (content.userInfo.id === editMutation.data.data.data.id) {
            content.userInfo.username = editMutation.data.data.data.username;
            content.userInfo.profile = editMutation.data.data.data.profile;
          }
          return content;
        }),
      );
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

  // 이미지 업로드
  const onImgChange = e => {
    if (e.target.files[0]) {
      uploadFiles(e.target.files[0]).then(imgUrl => {
        editMutation.mutate({
          username: userInfo.username,
          profile: imgUrl,
        });
      });
    } else {
      setImage(userInfo.profile);
    }
  };
  if (isLoading) {
    return (
      <div className="loadingbox">
        <Header />
        <div className="loadinglogo">
          <img className="logo-spin" src="/Coala_logo.png" alt="coala_logo" />
          ...
        </div>
      </div>
    );
  }
  if (userInfo) {
    return (
      <>
        {out ? <SignoutModal setout={setout} /> : <span />}
        <Header />
        <MypageWrapper>
          <span className="mypageLogo">MyPage</span>
          <div className="userInfoContaner">
            <div className="profileBox">
              <div className="imgBox">
                <img className="userProfile" alt="profile" src={Image} />
                <div
                  className="userProfileEdit"
                  onClick={() => {
                    userRef.current.click();
                  }}
                >
                  <input
                    className="editText"
                    type="file"
                    style={{ display: 'none' }}
                    accept="image/*"
                    ref={userRef}
                    onChange={onImgChange}
                  />
                  <span className="profileWord">프로필 변경</span>
                </div>
              </div>
            </div>
            {info ? (
              <form onSubmit={editSubmit}>
                <input className="autoComplete" aria-hidden="true" />
                <input
                  className="autoComplete"
                  type="password"
                  aria-hidden="true"
                />
                <div className="userInfoBox change">
                  <div className="form">
                    <input
                      className="editInput"
                      onChange={e => edithandler(e, 'userName')}
                      value={editValue.userName}
                      type="text"
                      autoComplete="false"
                    />
                    {editValue.userName ? (
                      <span />
                    ) : (
                      <span className="user-name" placeholder="닉네임" />
                    )}
                  </div>
                  <div className="form">
                    <input
                      className="editInput-pw"
                      type="password"
                      value={editValue.currentPw}
                      onChange={e => edithandler(e, 'currentPw')}
                      autoComplete="false"
                    />
                    {editValue.currentPw ? (
                      <span />
                    ) : (
                      <span
                        className="user-password"
                        placeholder="현재 비밀번호"
                      />
                    )}
                  </div>
                  <div className="form">
                    <input
                      className="editInput-succes"
                      type="password"
                      value={editValue.editurePw}
                      onChange={e => edithandler(e, 'editurePw')}
                    />
                    {editValue.editurePw ? (
                      <span />
                    ) : (
                      <span
                        className="user-PasswordCheck"
                        placeholder="변경할 비밀번호"
                      />
                    )}
                  </div>
                  <span className="Withdrawal" onClick={() => setout(true)}>
                    계정삭제
                  </span>
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
                <div className="userinfoName">
                  {userInfo.username}님 반갑습니다.
                </div>
                <span className="userinfoId">{userInfo.email}</span>
                <br />
                <span className="userText">{`내 게시물 총 ${myContent.length}개`}</span>
              </div>
            )}
            <button
              type="button"
              className="editInfo"
              data-tooltip-text={
                !info ? '유저정보 변경' : '클릭 시 유저정보로 이동합니다'
              }
              onClick={InfoHandeler}
            >
              <EditOutlined className="icon" />
            </button>
          </div>
          <div className="leftBlur" />
          <div className="rightBlur" />
        </MypageWrapper>
        {isLoading ? (
          <LoadingContents />
        ) : (
          <Contents mainContents={myContent} />
        )}
      </>
    );
  }
  return null;
}
const MypageWrapper = styled.div`
  background-image: url('https://i.imgur.com/bWzeWI4.jpg');
  background-size: cover;
  width: 100%;
  height: 490px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 100px;
  .mypageLogo {
    position: absolute;
    pointer-events: none;
    color: #999999;
    top: 120px;
    left: 330px;
    width: 70%;
    border-bottom: 1px solid #999999;
    font-size: 28px;
    font-style: sans-serif;
  }
  .leftBlur {
    position: absolute;
    height: 490px;
    width: 16%;
    left: 0;
    background-color: white;
  }
  .rightBlur {
    position: absolute;
    height: 490px;
    width: 16%;
    right: 0;
    background-color: white;
  }
  .userInfoContaner {
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    border-radius: 45px;
    margin-top: 80px;
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
      padding-top: 100px;
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
      top: 30px;
      font-size: 20px;
      position: absolute;
    }
    .editText {
      align-items: center;
      justify-content: center;
    }
  }
  .userinfoName {
    margin-top: 70px;
    margin-bottom: 0;
  }
  .userinfoName,
  .userinfoId,
  .userText {
    font-size: 17px;
  }
  .userInfoBox {
    font-family: 'Convergence', sans-serif;
    padding-top: 20px;
    height: 100%;
    width: 300px;
    .form {
      position: relative;
      margin-top: 10px;
    }
    .editInput,
    .editInput-pw,
    .editInput-succes {
      position: relative;
      top: 0;
      left: 0;
      height: 80%;
      width: 100%;
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
    .user-password,
    .user-PasswordCheck {
      position: absolute;
      pointer-events: none;
      font-weight: 500;
      font-size: 15px;
      font-family: sans-serif;
      left: 0.7rem;
      top: 0.8rem;
      padding: 0, 0.5rem;
      cursor: none;
      color: grey;
      transition: 0.3s ease-in-out;
      z-index: -1;
      border-radius: 100%;
    }
    .editInput + .user-name::before,
    .editInput-pw + .user-password::before,
    .editInput-succes + .user-PasswordCheck::before {
      content: attr(placeholder);
      display: inline-block;
      transition: 0.3s ease-in-out;
    }
    .editInput:focus,
    .editInput-pw:focus,
    .editInput-succes:focus {
      border-color: #287ae6;
    }
    .editInput:focus ~ .user-name::before,
    .editInput-pw:focus ~ .user-password::before,
    .editInput-succes:focus ~ .user-PasswordCheck::before {
      font-size: 0.7rem;
      transform: translate(0, -1.5em);
    }
  }
  .editPush,
  .edit-pw-submit {
    position: relative;
    font-weight: 500;
    color: #222222;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    left: 15px;
    margin-top: 10px;
    border: 1px solid #999999;
    box-shadow: 1px 1px 2px black;
    cursor: pointer;
    &:active {
      bottom: -1px;
      box-shadow: none;
    }
    &:hover {
      border: 1px solid black;
      color: black;
    }
  }
  .Withdrawal {
    bottom: 30px;
    right: 30px;
    position: absolute;
    font-size: 11.5px;
    color: red;
    cursor: pointer;
    transition: 0.1s;
  }
  .Withdrawal:hover {
    font-size: 12px;
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
  .autoComplete {
    height: 0px;
    width: 0px;
    border: none;
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
    .mypageLogo {
      left: 70px;
    }
  }
  @media screen and (max-width: ${SView + 500}px) {
    .leftBlur {
      display: none;
    }
    .rightBlur {
      display: none;
    }
  }
  @media screen and (max-width: ${SView + 300}px) {
    .mypageLogo {
      left: 150px;
    }
  }
  @media screen and (max-width: ${SView + 200}px) {
    .mypageLogo {
      left: 100px;
    }
  }
  @media screen and (max-width: ${SView}px) {
    .mypageLogo {
      left: 50px;
      width: 80%;
    }
  }
`;

export default Mypage;
