import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery } from 'react-query';
import { getAdminUserAPI, deleteAdminContentAPI } from '../api/admin';
import Header from '../components/Header';
import AdminNavBar from '../components/AdminNavBar';
import AdminUserInfo from '../components/AdminUserInfo';
import AdminPost from '../components/AdminPost';

import { LOAD_ALL_USERINFO_SUCCESS } from '../reducer/user';

function Admin() {
  const { allUserInfo } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const { isLoading, data: userData } = useQuery('Admin', getAdminUserAPI, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  useEffect(() => {
    if (userData) {
      dispatch({
        type: LOAD_ALL_USERINFO_SUCCESS,
        data: userData.data.userInfo,
      });
    }
  }, [userData]);

  if (isLoading) {
    return <h1>Loading....</h1>;

  }
  if (userData) {
    return (
      <div>
        <Header />
        <AdminNavBar />
        <AdminUserInfo allUserInfo={allUserInfo} />
      </div>
    );
  }
}

export default Admin;
