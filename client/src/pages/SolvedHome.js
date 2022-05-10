import React, { useEffect } from 'react';
import { useQuery, useInfiniteQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';
import LoadingContents from '../components/LoadingContents';
import { getfilterContentsAPI, getMoreSolvedContentsAPI } from '../api/content';
import {
  SOLVED_CONTENTS_SUCCESS,
  LOAD_MORE_SOLVED_CONTENTS,
} from '../reducer/content';

function SolvedHome() {
  const { solvedContents, isloadSolvedContents } = useSelector(
    state => state.content,
  );
  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    data: contentsData,
    error,
  } = useQuery('solvedContents', () => getfilterContentsAPI({ done: 1 }), {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실페시 재실행 여부
    enabled: !isloadSolvedContents,
  });

  useEffect(() => {
    if (contentsData && !isloadSolvedContents) {
      dispatch({
        type: SOLVED_CONTENTS_SUCCESS,
        data: contentsData.data.data,
      });
    }
  }, [contentsData, isloadSolvedContents]);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['solvedMoreContents'],
    ({ pageParam = solvedContents[0].id + 1 }) =>
      getMoreSolvedContentsAPI(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
      refetchOnWindowFocus: false,
      enabled: solvedContents.length > 0,
    },
  );

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
          type: LOAD_MORE_SOLVED_CONTENTS,
          data: newData,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [solvedContents, hasNextPage, data]);

  if (isLoading) {
    return (
      <div>
        <Header />
        <NavBar />
        <LoadingContents />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <NavBar />
      <Contents mainContents={solvedContents} />
    </div>
  );
}

export default SolvedHome;
