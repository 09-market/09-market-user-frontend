import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { PALLETS } from 'utils/constants';

export default function PostItems({ currentCategory }) {
  const navigate = useNavigate();

  const postData = [
    {
      postId: 1,
      postTitle: '상품명_1',
      postImageUrl: '/images/example_1.jpg',
      postLike: 100,
      postComent: 100,
    },
    {
      postId: 2,
      postTitle: '상품명_2',
      postImageUrl: '/images/example_2.jpg',
      postLike: 200,
      postComent: 200,
    },
  ];

  return (
    <>
      <h2 className="blind">{currentCategory} 카테고리 게시글</h2>
      <PostsWrap>
        {postData.map((post) => (
          <PostItem
            onClick={() => navigate(`/post/detail/${post.postId}`)}
            key={post.postId}
          >
            <ItemImageWrap>
              <ItemImage src={post.postImageUrl} alt={post.postTitle} />
              <ItemBackground />
            </ItemImageWrap>
            <ItemInfo>
              <ItemLike>
                <span className="blind">좋아요 수</span>
                {post.postLike}
              </ItemLike>
              <ItemComment>
                <span className="blind">댓글 수</span>
                {post.postComent}
              </ItemComment>
            </ItemInfo>
          </PostItem>
        ))}
      </PostsWrap>
    </>
  );
}

const PostsWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostItem = styled.li`
  cursor: pointer;
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

  @media screen and (min-width: 420px) {
    height: 500px;
  }
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
