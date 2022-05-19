import React from 'react';
import { Navigate } from 'react-router-dom';

import UserInfo from './UserInfo';
import ItemsInfo from './ItemsInfo';

import { isLogined } from 'utils/isLogined';

export default function ProfilePage() {
  if (isLogined()) {
    return (
      <>
        <UserInfo />
        <ItemsInfo />
      </>
    );
  } else {
    return <Navigate replace to="/signin" />;
  }
}
