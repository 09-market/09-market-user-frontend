import React from 'react';
import styled from 'styled-components';

import GoBackHeader from 'components/GoBackHeader';

export default function PostDetailPage() {
  return (
    <>
      <GoBackHeader headerTitle="상품" />
      <PostDetailWrap></PostDetailWrap>
    </>
  );
}
const PostDetailWrap = styled.main``;

const ItemImage = styled.img`
  position: relative;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;

  @media screen and (min-width: 420px) {
    height: 500px;
  }
`;
