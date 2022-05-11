import React, { useEffect } from 'react';
import { useQuery, useInfiniteQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';
import LoadingContents from '../components/LoadingContents';
import {
  getfilterContentsAPI,
  getMoreSolvingContentsAPI,
} from '../api/content';
import {
  SOLVING_CONTENTS_SUCCESS,
  LOAD_MORE_SOLVING_CONTENTS,
} from '../reducer/content';

function SolvingHome() {
  const { solvingContents, isloadSolvingContents } = useSelector(
    state => state.content,
  );
  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    data: contentsData,
    error,
  } = useQuery('solvingContents', () => getfilterContentsAPI({ done: 0 }), {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실페시 재실행 여부
    enabled: !isloadSolvingContents,
  });

  useEffect(() => {
    if (contentsData && !isloadSolvingContents) {
      dispatch({
        type: SOLVING_CONTENTS_SUCCESS,
        data: contentsData.data.data,
      });
    }
  }, [contentsData, isloadSolvingContents]);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['solvingMoreContents'],
    ({ pageParam = solvingContents[0].id + 1 }) =>
      getMoreSolvingContentsAPI(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      enabled: solvingContents.length > 0,
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
          type: LOAD_MORE_SOLVING_CONTENTS,
          data: newData,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [solvingContents, hasNextPage, data]);

  // 마지막 나머지 컨텐츠 불러오기

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
      <Contents mainContents={solvingContents} />
    </div>
  );
}

export default SolvingHome;
