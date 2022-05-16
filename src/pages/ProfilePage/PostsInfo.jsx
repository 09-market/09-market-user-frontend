import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function FeedInfo() {
  const userId = localStorage.getItem('userId');
  const [itemsData, setItemsData] = useState([
    { imgUrl: '/images/example_1.jpg' },
    { imgUrl: '/images/example_2.jpg' },
    { imgUrl: '/images/example_3.jpg' },
    { imgUrl: '/images/example_2.jpg' },
    { imgUrl: '/images/example_1.jpg' },
  ]);

  if (itemsData.length > 0) {
    return (
      <FeedInfoWrap>
        <h2 className="blind">{userId}님이 업로드한 상품 정보</h2>
        <PostsContainer>
          {itemsData.map((item, index) => (
            <PostItem key={index}>
              <img src={item.imgUrl} alt="" />
            </PostItem>
          ))}
        </PostsContainer>
      </FeedInfoWrap>
    );
  } else {
    return <NotExist>상품을 업로드하세요!</NotExist>;
  }
}

const FeedInfoWrap = styled.section`
  max-width: 90vw;
  margin: 5px auto 5px;
`;

const PostsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

const PostItem = styled.li`
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NotExist = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
`;
