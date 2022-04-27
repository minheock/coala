import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';
import { getContentsAPI } from '../api/content';
import { LOAD_CONTENTS_SUCCESS } from '../reducer/content';

function Home() {
  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    data: contentsData,
    error,
  } = useQuery('contents', getContentsAPI, {
    retry: 0,
  });
  if (contentsData) {
    console.log(contentsData);
    dispatch({
      type: LOAD_CONTENTS_SUCCESS,
      data: contentsData.data,
    });
  }
  // useEffect(() => {
  //   getContentsAPI()
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <div>
      <Header page="Home" />
      <NavBar />
      <Contents />
    </div>
  );
}

export default Home;
