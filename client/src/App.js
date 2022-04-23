import './App.css';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import ContentDetail from './pages/ContentDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Post />} />
        <Route path="/content/detail" element={<ContentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
