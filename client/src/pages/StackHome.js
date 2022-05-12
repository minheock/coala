import React, { useEffect, useState } from 'react';
import { useQuery, useInfiniteQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';
import LoadingContents from '../components/LoadingContents';
import { getfilterContentsAPI, getMoreStackContentsAPI } from '../api/content';
import {
  INIT_STACK_CONTENTS,
  LOAD_MORE_STACK_SUCCESS,
  STACK_CONTENTS_SUCCESS,
} from '../reducer/content';

function StackHome() {
  let throttle = false;
  const dispatch = useDispatch();
  const { stack } = useParams();
  const { stackContents } = useSelector(state => state.content);
  const [curStack, setCurStack] = useState();
  const {
    isLoading,
    isError,
    data: contentsData,
    refetch,
    error,
  } = useQuery('solvedContents', () => getfilterContentsAPI({ stack }), {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실페시 재실행 여부
    enabled: !!stack,
  });

  useEffect(() => {
    refetch();
    setCurStack(new Date(Date.now()));
  }, [stack]);

  useEffect(() => {
    if (contentsData && stack) {
      dispatch({
        type: STACK_CONTENTS_SUCCESS,
        data: contentsData.data.data,
      });
    }
  }, [contentsData, stack]);

  useEffect(() => {
    console.log('입장');
    return () =>
      dispatch({
        type: INIT_STACK_CONTENTS,
      });
  }, []);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    [`stack${stack}MoreContents${curStack}`],
    ({ pageParam = stackContents[0].id + 1 }) =>
      getMoreStackContentsAPI(stack, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
      refetchOnWindowFocus: false,
      enabled: stackContents.length > 0,
    },
  );

  useEffect(() => {
    const handleScroll = async () => {
      if (!throttle) {
        if (
          hasNextPage &&
          window.scrollY + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 100
        ) {
          throttle = true;
          await fetchNextPage();
          const newData = [];
          data.pages.forEach(page => newData.push(...page.items));
          // console.log(newData);
          dispatch({
            type: LOAD_MORE_STACK_SUCCESS,
            data: newData,
          });
          throttle = false;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stackContents, hasNextPage, data]);

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
      <Contents mainContents={stackContents} />
    </div>
  );
}

export default StackHome;
