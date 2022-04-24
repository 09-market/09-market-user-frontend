import React from 'react';
import { Navigate } from 'react-router-dom';

import GoBackHeader from 'components/GoBackHeader';

import { isLogined } from 'utils/isLogined';

export default function PostUploadPage() {
  if (isLogined()) {
    return (
      <>
        <GoBackHeader headerTitle="새 게시물" />
      </>
    );
  } else {
    return <Navigate replace to="/signin" />;
  }
}
