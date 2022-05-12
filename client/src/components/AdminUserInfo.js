/* eslint-disable array-callback-return */
import { Avatar, Space, Card, Button } from 'antd';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAdminUserAPI } from '../api/admin';
import { SET_ERROR_MESSAGE } from '../reducer/modal';

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

  const dispatch = useDispatch();

  const deleteUserHandle = e => {
    delUserMutation.mutate(e.currentTarget.id);
  };

  useEffect(() => {
    if (delUserMutation.isSuccess) {
      window.location.reload();
    } else if (delUserMutation.isError) {
      dispatch({
        type: SET_ERROR_MESSAGE,
        data: delUserMutation.error.response.data.message,
      });
    }
  }, [delUserMutation.status]);

  return (
    <div>
      {allUserInfo.map(user => (
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
