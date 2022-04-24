import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css';
// import NavBar from './components/NavBar';
// import Header from './components/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home';
import Post from './pages/Post';
import ContentDetail from './pages/ContentDetail';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<Post />} />
        <Route path="/content/detail" element={<ContentDetail />} />
      </Routes>
      {/* <NavBar /> */}
    </div>
  );
}

export default App;
