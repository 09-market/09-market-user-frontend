import React from 'react';
import styled from 'styled-components';

import GoBackHeader from 'components/GoBackHeader';
import PostItem from './PostItem';

export default function PostDetailPage() {
  return (
    <>
      <GoBackHeader headerTitle="상품" />
      <PostItem></PostItem>
    </>
  );
}
