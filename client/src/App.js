import './App.css';
import Header from './components/Header';
import 'antd/dist/antd.min.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <NavBar />
      <h1>Coala</h1>
    </div>
  );
}

export default App;
