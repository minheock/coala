import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { useQuery, useMutation } from 'react-query';
import { useEffect, useState } from 'react';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import Admin from './pages/Admin';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home';
import Post from './pages/Post';
import Mypage from './pages/Mypage';
import ContentDetail from './pages/ContentDetail';
import AlertModal from './components/AlertModal';
import AdminUserInfo from './components/AdminUserInfo';
import AdminPost from './components/AdminPost';
import { INIT_SOCKETIO } from './reducer/chat';
import { getuserAPI, githubLoginAPI } from './api/user';
import { LOG_IN_SUCCESS } from './reducer/user';
import { SET_ERROR_MESSAGE } from './reducer/modal';
import SolvingHome from './pages/SolvingHome';
import SolvedHome from './pages/SolvedHome';
import StackHome from './pages/StackHome';
import SearchHome from './pages/SearchHome';

const socket = io.connect(process.env.REACT_APP_AXIOS_BASE_URL, {
  transports: ['websocket'],
  withCredentials: true,
});

function App() {
  const {
    isError,
    isSuccess,
    data: userInfoData,
    isLoading,
    status,
  } = useQuery('userInfo', getuserAPI, {
    refetchOnWindowFocus: false,
    retry: 0,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, success } = useSelector(state => state.modal);
  const { editContent } = useSelector(state => state.content);
  const githubLoginMutation = useMutation(githubLoginAPI); // 토큰 요청 api
  useEffect(() => {
    dispatch({
      type: INIT_SOCKETIO,
      data: socket,
    });
  }, [socket]);

  useEffect(() => {
    socket.on(`send_join`, data => {
      console.log(`send_join${data}`);
    });
  }, [socket]);

  useEffect(() => {
    if (isSuccess) {
      dispatch({
        type: LOG_IN_SUCCESS,
        data: userInfoData.data.data,
      });
    } else if (isError) {
      console.log('should login');
    }
  }, [status]);

  useEffect(() => {
    // 깃헙 로그인 성공시
    if (githubLoginMutation.isSuccess) {
      const userinfo = githubLoginMutation.data.data;
      dispatch({
        type: LOG_IN_SUCCESS,
        data: userinfo.data,
      });
      navigate('/');
    } else if (githubLoginMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: githubLoginMutation.error.response.data.message,
      });
    }
  }, [githubLoginMutation.status]);

  function getAccessToken(authorizationCode) {
    // 서버로 인가 코드 보낸 후 코알라 토큰 반환 요청
    const authorization = { authorizationCode };
    githubLoginMutation.mutate(authorization);
  }
  // 화면 렌더링시 url에서 인가코드 때서 서버 요청 보낼 함수에 전달
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      // authorization server로부터 클라이언트로 리디렉션된 경우, authorization code가 함께 전달
      // console.log(authorizationCode); // 인가 코드 들어옴
      getAccessToken(authorizationCode);
    }
  }, []);

  return (
    <div className="App">
      {error ? <AlertModal message={error} state="error" /> : null}
      {success ? <AlertModal message={success} state="success" /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/solving" element={<SolvingHome />} />
        <Route path="/solved" element={<SolvedHome />} />
        <Route path="/stack/:stack" element={<StackHome />} />
        <Route path="/search/:keyword" element={<SearchHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/post" element={<AdminPost />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/write" element={<Post />} />
        <Route path="/edit" element={<Post isEdit={editContent} />} />
        <Route path="/content/:contentId" element={<ContentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
