import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css';
import { useSelector } from 'react-redux';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home';
import Post from './pages/Post';
import ContentDetail from './pages/ContentDetail';
import ErrorModal from './components/ErrorModal';

function App() {
  const { error } = useSelector(state => state.modal);
  return (
    <div className="App">
      {error ? <ErrorModal message={error} /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<Post />} />
        <Route path="/content/detail" element={<ContentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
