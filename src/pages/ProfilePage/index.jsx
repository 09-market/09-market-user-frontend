import React from 'react';
import { Navigate } from 'react-router-dom';

import UserInfo from './UserInfo';
import PostsInfo from './PostsInfo';

import { isLogined } from 'utils/isLogined';

export default function ProfilePage() {
  if (isLogined()) {
    return (
      <>
        <UserInfo />
        <PostsInfo />
      </>
    );
  } else {
    return <Navigate replace to="/signin" />;
  }
}
