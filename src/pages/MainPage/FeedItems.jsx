import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PALLETS } from 'utils/constants';
import axios from '../../api/axios';

export default function FeedItems({ currentCategory }) {
  const [itemsData, setItemsData] = useState([
    {
      itemId: 1,
      itemImageUrl: '/images/example_1.jpg',
      name: '예시',
      likes: 100,
      comments: 100,
    },
    {
      itemId: 2,
      itemImageUrl: '/images/example_2.jpg',
      name: '예시',
      likes: 1000,
      comments: 1000,
    },
    {
      itemId: 3,
      itemImageUrl: '/images/example_3.jpg',
      name: '예시',
      likes: 10000,
      comments: 10000,
    },
  ]);

  // const getFeedItems = async (currentCategory) => {
  //   const url =
  //     currentCategory === '전체' ? '/item' : `/item/${currentCategory}`;

  //   await axios
  //     .get(url)
  //     .then((res) => {
  //       setItemsData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getFeedItems(currentCategory);
  // }, [currentCategory]);

  if (itemsData.length >= 0)
    return (
      <>
        <h2 className="blind">{currentCategory} 카테고리 게시글</h2>
        <PostsWrap>
          {itemsData.map((item) => (
            <PostItem key={item.itemId}>
              <Link to={`/item/detail/${item.itemId}`}>
                <ItemImageWrap>
                  <ItemImage src={item.itemImageUrl} alt={item.name} />
                  <ItemBackground />
                </ItemImageWrap>
                <ItemInfo>
                  <ItemLike>
                    <span className="blind">좋아요 수</span>
                    {item.likes}
                  </ItemLike>
                  <ItemComment>
                    <span className="blind">댓글 수</span>
                    {item.comments}
                  </ItemComment>
                </ItemInfo>
              </Link>
            </PostItem>
          ))}
        </PostsWrap>
      </>
    );
  else return <NotExist>등록된 상품이 없습니다.</NotExist>;
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
    left: -25px;
  }
`;

const ItemComment = styled(ItemLike)`
  &::before {
    background-image: url('/images/comment.png');
  }
`;

const NotExist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 240px);
`;
