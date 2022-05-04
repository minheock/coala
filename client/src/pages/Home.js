import React, { useEffect } from 'react';
import { useQuery, useInfiniteQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';
import { getContentsAPI } from '../api/content';
import { LOAD_CONTENTS_SUCCESS, LOAD_MORE_CONTENTS } from '../reducer/content';
import LoadingContents from '../components/LoadingContents';

const getMoreContentsAPI = async (lastId = 50) => {
  const response = await axios.get(
    `http://localhost:4000/contents?lastId=${lastId}`,
  );
  return response;
};

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

  const {
    data,
    isLoading: scrollLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ['getMoreContents'],
    ({ lastId = 30 }) => getMoreContentsAPI(lastId),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage.data);
        return lastPage.data;
      },
    },
  );

  useEffect(() => {
    const handleScroll = () => {
      const lastId = mainContents[mainContents.length - 1]?.id;
      if (
        !scrollLoading &&
        window.scrollY + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 100
      ) {
        fetchNextPage();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mainContents]);

  useEffect(() => {
    if (contentsData) {
      dispatch({
        type: LOAD_CONTENTS_SUCCESS,
        data: contentsData.data.data,
      });
    }
  }, [contentsData]);

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
