import React from 'react';

import styled from 'styled-components';

export default function PostItem() {
  return (
    <PostItemWrap>
      <ItemImage src="" alt="" />
    </PostItemWrap>
  );
}

const PostItemWrap = styled.main`
  margin-top: 70px;
`;

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
