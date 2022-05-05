import React, { useEffect, useState } from 'react';
import { useQuery, useInfiniteQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';
import { getContentsAPI, getMoreContentsAPI } from '../api/content';
import { LOAD_CONTENTS_SUCCESS, LOAD_MORE_CONTENTS } from '../reducer/content';
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

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['mainContents'],
    ({ pageParam = mainContents[0].id + 1 }) => getMoreContentsAPI(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        // console.log('lastPage', lastPage);
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      enabled: mainContents.length > 0,
    },
  );
  // console.log('data:', data);
  console.log('hasNextpage:', hasNextPage);

  useEffect(() => {
    const handleScroll = async () => {
      if (
        hasNextPage &&
        window.scrollY + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 100
      ) {
        await fetchNextPage();
        const newData = [];
        data.pages.forEach(page => newData.push(...page.items));
        // console.log(newData);
        dispatch({
          type: LOAD_MORE_CONTENTS,
          data: newData,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mainContents, hasNextPage, data?.pages.length]);

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
