import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css';
import { useSelector } from 'react-redux';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home';
import Post from './pages/Post';
import ContentDetail from './pages/ContentDetail';
import AlertModal from './components/AlertModal';

function App() {
  const { error, success } = useSelector(state => state.modal);
  return (
    <div className="App">
      {error ? <AlertModal message={error} state="error" /> : null}
      {success ? <AlertModal message={success} state="success" /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<Post />} />
        <Route path="/content/:contentId" element={<ContentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
