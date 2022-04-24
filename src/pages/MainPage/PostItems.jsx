import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { PALLETS } from 'utils/constants';

export default function PostItems({ category }) {
  const navigate = useNavigate();

  const postData = {
    postId: 1,
    postTitle: '상품명',
    postImageUrl: '/images/example_1.jpg',
    postLike: 100,
    postComent: 100,
  };

  return (
    <MainPageContainer>
      <MainPageItem onClick={() => navigate(`/post/detail/${postData.postId}`)}>
        <ItemImageWrap>
          <ItemImage src={postData.postImageUrl} alt={postData.postTitle} />
          <ItemBackground />
        </ItemImageWrap>
        <ItemInfo>
          <ItemLike>
            <span className="blind">좋아요 수</span>
            {postData.postLike}
          </ItemLike>
          <ItemComment>
            <span className="blind">댓글 수</span>
            {postData.postComent}
          </ItemComment>
        </ItemInfo>
      </MainPageItem>
    </MainPageContainer>
  );
}

const MainPageContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPageItem = styled.li`
  position: relative;
  width: 95vw;
  margin-top: 2.5vw;
`;

const ItemImageWrap = styled.div``;

const ItemImage = styled.img`
  position: relative;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;

const ItemBackground = styled.div`
  display: block;
  content: '';
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to top, ${PALLETS.BLACK}, rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 4px;
  left: 0;
  border-radius: 0 0 5px 5px;
`;

const ItemInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: ${PALLETS.WHITE};
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const ItemLike = styled.p`
  position: relative;

  &::before {
    display: block;
    content: '';
    width: 1rem;
    height: 1rem;
    background-image: url('/images/like.png');
    background-size: cover;
    position: absolute;
    left: -90%;
    top: 0;
  }
`;

const ItemComment = styled(ItemLike)`
  &::before {
    background-image: url('/images/comment.png');
  }
`;
