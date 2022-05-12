import React, { useEffect, useState } from 'react';
import { useQuery, useInfiniteQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contents from '../components/Contents';
import LoadingContents from '../components/LoadingContents';
import { getfilterContentsAPI, getMoreSearchContentsAPI } from '../api/content';
import {
  INIT_SEARCH_CONTENTS,
  SEARCH_CONTENTS_SUCCESS,
  LOAD_MORE_SEARCH_SUCCESS,
} from '../reducer/content';

function SearchHome() {
  let throttle = false;
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { searchContents } = useSelector(state => state.content);
  const [curSearch, setCurSearch] = useState();
  const {
    isLoading,
    isError,
    data: contentsData,
    refetch,
    error,
  } = useQuery('searchContents', () => getfilterContentsAPI({ keyword }), {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실페시 재실행 여부
    enabled: !!keyword,
  });

  useEffect(() => {
    refetch();
    setCurSearch(new Date(Date.now()));
  }, [keyword]);

  useEffect(() => {
    if (contentsData && keyword) {
      dispatch({
        type: SEARCH_CONTENTS_SUCCESS,
        data: contentsData.data.data,
      });
    }
  }, [contentsData, keyword]);

  useEffect(() => {
    console.log('검색');
    return () =>
      dispatch({
        type: INIT_SEARCH_CONTENTS,
      });
  }, []);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    [`search${keyword}MoreContents${curSearch}`],
    ({ pageParam = searchContents[0].id + 1 }) =>
      getMoreSearchContentsAPI(keyword, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
      refetchOnWindowFocus: false,
      enabled: searchContents.length > 0,
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
            type: LOAD_MORE_SEARCH_SUCCESS,
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
  }, [searchContents, hasNextPage, data]);

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
      <Contents mainContents={searchContents} />
    </div>
  );
}

export default SearchHome;
