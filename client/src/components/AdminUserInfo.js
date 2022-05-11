/* eslint-disable array-callback-return */
import { Avatar, Space, Card, Button } from 'antd';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminUserAPI } from '../api/admin';
import { SET_ERROR_MESSAGE, SET_SUCCESS_MESSAGE } from '../reducer/modal';
import { LOAD_ALL_USERINFO_SUCCESS } from '../reducer/user';

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

function AdminUserInfo({ allUserInfo }) {
  const delUserMutation = useMutation(deleteAdminUserAPI);
  const [userId, setUserId] = useState();
  const [userList, setUserList] = useState(allUserInfo);

  const dispatch = useDispatch();
  console.log(allUserInfo);
  const deleteUserHandle = e => {
    e.preventDefault();
    setUserId(e.currentTarget.id);
    delUserMutation.mutate(e.currentTarget.id);
  };

  // useEffect(() => {
  //   if (delUserMutation.isSuccess) {
  //     // const filterList = userList.filter(el => {
  //     //   el.id === userId;
  //     // });
  //     // console.log(allUserInfo);
  //     // setUserList(filterList);
  //   } else if (delUserMutation.isError) {
  //     dispatch({
  //       type: SET_ERROR_MESSAGE,
  //       data: delUserMutation.error.response.data.message,
  //     });
  //   }
  // }, [delUserMutation.status]);

  return (
    <div>
      {userList.map(user => (
        <Container>
          <div className="user-box" key={user.id}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: 'flex' }}
            >
              <Card title={`User NO.${user.id}`} size="middle">
                <Avatar src={user.profile} />
                <p className="text-block">User Name : {user.username}</p>
                <p className="text-block">Email : {user.email}</p>
                <Button onClick={deleteUserHandle} id={user.id}>
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

export default AdminUserInfo;
