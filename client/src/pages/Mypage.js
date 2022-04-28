import { useState } from 'react';
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { edituserAPI } from '../api/user';
import Header from '../components/Header';

function Mypage() {
  const [info, setInfo] = useState(false);
  const { userInfo } = useSelector(state => state.user);
  const navigate = useNavigate();
  if (!userInfo) {
    navigate('/');
  }
  console.log(userInfo);
  if (userInfo) {
    return (
      <>
        <Header />
        <MypageWrapper>
          <span className="mypageLogo">MyPage</span>
          <div className="userInfoContaner">
            <div className="profileBox">
              <div className="xx">
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
            <div className="userInfoBox">
              <span className="userName">
                {userInfo.username}님 반갑습니다.
              </span>
              <br />
              <span className="userId">{userInfo.email}</span>
              <br />
              <span className="usertext">아무거나</span>
            </div>
            <button type="button" className="editInfo">
              <EditOutlined className="icon" />
            </button>
          </div>
          <div className="userContents" src={userInfo.profile} />
        </MypageWrapper>
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
  .mypageLogo {
    position: absolute;
    top: 120px;
    left: 30vw;
    font-size: 22px;
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
    .xx .userProfileEdit {
      transition: opacity 0.35s ease-in-out;
    }
    .xx:hover .userProfileEdit {
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
    .userProfileEdit .editText {
      margin-top: 40%;
    }
  }

  .userInfoBox {
    padding-top: 30px;
    height: 100%;
    width: 300px;
    /* border: 1px solid black; */
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
  }

  .userContents {
    margin-top: 100px;
    height: 300px;
    width: 500px;
    border: 1px solid;
  }
`;

export default Mypage;
