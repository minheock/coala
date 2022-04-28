import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';
import { getContentsAPI } from '../api/content';
import { LOAD_CONTENTS_SUCCESS } from '../reducer/content';
import LoadingContents from '../components/LoadingContents';

function Home() {
  const { mainContents } = useSelector(state => state.content);
  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    data: contentsData,
    error,
  } = useQuery('contents', getContentsAPI, {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실페시 재실행 여부
  });

  useEffect(() => {
    if (contentsData) {
      dispatch({
        type: LOAD_CONTENTS_SUCCESS,
        data: contentsData.data.data,
      });
    }
  }, [contentsData]);

  // useEffect(() => {
  //   getContentsAPI()
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => console.error(error));
  // }, []);
  if (isLoading) {
    return (
      <div>
        <Header page="Home" />
        <NavBar />
        <LoadingContents />
      </div>
    );
  }
  return (
    <div>
      <Header page="Home" />
      <NavBar />
      <Contents mainContents={mainContents} />
    </div>
  );
}

export default Home;
