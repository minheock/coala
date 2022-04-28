import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home';
import Post from './pages/Post';
import Mypage from './pages/Mypage';
import ContentDetail from './pages/ContentDetail';
import AlertModal from './components/AlertModal';
import { INIT_SOCKETIO } from './reducer/chat';

const socket = io.connect(process.env.REACT_APP_AXIOS_BASE_URL);

function App() {
  const dispatch = useDispatch();
  const { error, success } = useSelector(state => state.modal);
  dispatch({
    type: INIT_SOCKETIO,
    data: socket,
  });
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
        <Route path="/content/:contentId" element={<ContentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
