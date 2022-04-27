import React from 'react';
import { Navigate } from 'react-router-dom';

import { isLogined } from 'utils/isLogined';

import GoBackHeader from 'components/GoBackHeader';
import PostUploadForm from './PostUploadForm';

export default function PostUploadPage() {
  if (isLogined()) {
    return (
      <>
        <GoBackHeader headerTitle="새 게시물" />
        <PostUploadForm />
      </>
    );
  } else {
    return <Navigate replace to="/signin" />;
  }
}
