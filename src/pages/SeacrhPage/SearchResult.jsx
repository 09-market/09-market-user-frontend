import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { PALLETS } from 'utils/constants';

export default function SearchResult({}) {
  const navigate = useNavigate();

  return (
    <SearchResultWrap>
      <h2 className="blind">검색 결과</h2>
      <PostsWrap>
        {/* {itemsData.map((item) => (
          <PostItem
            onClick={() => navigate(`/item/detail/${item.itemId}`)}
            key={item.itemId}
          >
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
          </PostItem>
        ))} */}
      </PostsWrap>
    </SearchResultWrap>
  );
}

const SearchResultWrap = styled.main`
  margin-top: 70px;
`;

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
    left: -20px;
    top: 0;
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
