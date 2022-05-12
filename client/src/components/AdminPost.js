/* eslint-disable array-callback-return */
import { Avatar, Space, Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMutation, useQuery, useInfiniteQuery } from 'react-query';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminContentAPI } from '../api/admin';
import { SET_ERROR_MESSAGE, SET_SUCCESS_MESSAGE } from '../reducer/modal';
import { getContentsAPI, getMoreContentsAPI } from '../api/content';
import { LOAD_CONTENTS_SUCCESS, LOAD_MORE_CONTENTS } from '../reducer/content';
import Header from './Header';
import AdminNavBar from './AdminNavBar';

const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  .user-box {
    width: 70%;
    align-items: center;
    flex-direction: column;
  }
  .text-block {
    margin-top: 0.5rem;
  }
`;

function AdminPost() {
  let throttle = false;
  const { mainContents, isloadMainContents } = useSelector(
    state => state.content,
  );
  console.log(mainContents);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: contentsData } = useQuery('maincontents', getContentsAPI, {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실페시 재실행 여부
    enabled: !isloadMainContents,
  });

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['mainContents'],
    ({ pageParam = mainContents[0].id + 1 }) => getMoreContentsAPI(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
      refetchOnWindowFocus: false,
      enabled: mainContents.length > 0,
    },
  );

  console.log('data:', data);
  console.log('hasNextpage:', hasNextPage);

  useEffect(() => {
    const handleScroll = async () => {
      if (!throttle) {
        if (
          hasNextPage &&
          window.scrollY + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 100
        ) {
          throttle = true;
          const answer = await fetchNextPage();
          const newData = [];
          answer.data.pages.forEach(page => newData.push(...page.items));
          dispatch({
            type: LOAD_MORE_CONTENTS,
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
  }, [mainContents, hasNextPage]);

  useEffect(() => {
    if (contentsData && !isloadMainContents) {
      dispatch({
        type: LOAD_CONTENTS_SUCCESS,
        data: contentsData.data.data,
      });
    }
  }, [contentsData, isloadMainContents]);
  //! -- 무한 스크롤 --
  const delPostMutation = useMutation(deleteAdminContentAPI);
  const [userId, setUserId] = useState();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (mainContents) {
      setPostList(mainContents);
    }
  }, [postList]);

  const deletePostHandle = e => {
    console.log(e.currentTarget.id);
    delPostMutation.mutate(e.currentTarget.id);
  };

  useEffect(() => {
    if (delPostMutation.isSuccess) {
      const filterList = postList.filter(el => el.id !== userId);
      setUserId(filterList);
      window.location.reload();
      navigate('/admin/post');
    } else if (delPostMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: delPostMutation.error.response.data.message,
      });
    }
  }, [delPostMutation.status]);

  return (
    <div>
      <Header />
      <AdminNavBar />
      {mainContents.map(posts => (
        <Container>
          <div className="user-box" key={posts.id}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: 'flex' }}
            >
              <Card title={`Post NO.${posts.id}`} size="middle">
                <Avatar
                  shape="square"
                  size={100}
                  src={
                    posts.thumbnail
                      ? posts.thumbnail
                      : 'https://cdn.discordapp.com/attachments/918179432664018944/973979209095598130/unknown.png'
                  }
                />
                <p className="text-block">Writer : {posts.userInfo.username}</p>
                <p className="text-block">Post Title : {posts.title}</p>
                <Button onClick={deletePostHandle} id={posts.id}>
                  DELETE
                </Button>
              </Card>
            </Space>
          </div>
        </Container>
      ))}
    </div>
  );
}

export default AdminPost;
