import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';

function Home() {
  return (
    <div>
      <Header page="Home" />
      <NavBar />
      <Contents />
    </div>
  );
}

export default Home;
