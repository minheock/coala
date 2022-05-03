import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home';
import Post from './pages/Post';
import Mypage from './pages/Mypage';
import ContentDetail from './pages/ContentDetail';
import AlertModal from './components/AlertModal';
import { INIT_SOCKETIO } from './reducer/chat';
import { getuserAPI } from './api/user';
import { LOG_IN_SUCCESS } from './reducer/user';

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
  const dispatch = useDispatch();
  const { error, success } = useSelector(state => state.modal);
  const { editContent } = useSelector(state => state.content);
  useEffect(() => {
    dispatch({
      type: INIT_SOCKETIO,
      data: socket,
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

  return (
    <div className="App">
      {error ? <AlertModal message={error} state="error" /> : null}
      {success ? <AlertModal message={success} state="success" /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/write" element={<Post />} />
        <Route path="/edit" element={<Post isEdit={editContent} />} />
        <Route path="/content/:contentId" element={<ContentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
