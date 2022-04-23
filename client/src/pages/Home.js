import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';
import uploadFiles from '../firebase';

function Home() {
  const formHandler = e => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };
  return (
    <div>
      <Header page="Home" />
      <NavBar />
      <Contents />
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Home;
