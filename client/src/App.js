import './App.css';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
