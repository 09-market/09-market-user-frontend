import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import axios from '../../api/axios';
import { setImgSrc } from 'utils/setImgSrc';

import ItemLoading from './ItemLoading';

export default function ItemData() {
  const itemId = useParams().itemId;
  const [itemData, setItemData] = useState({});

  const getItem = useCallback(async () => {
    await axios
      .get(`/item/detail/${itemId}`)
      .then((res) => {
        setItemData(res.data);
      })
      .catch((err) => console.log(err));
  }, [itemId]);
  /*
  {
    "itemId": 6,
    "itemImageUrl": "",
    "name": "테스트2",
    "itemInfo": "테스트2",
    "price": 2000,
    "amount": 22,
    "category": "기타",
    "instagramUrl": "      },",
    "likes": 0,
    "comments": []
}
  */

  useEffect(() => {
    getItem();
  }, [getItem]);

  return Object.keys(itemData).length > 0 ? (
    <PostItemWrap>
      <PostAuthorWrap to="">
        <AuthorImage src="" alt="" />
        <AuthorName></AuthorName>
      </PostAuthorWrap>
      <ItemTitle>{itemData.name}</ItemTitle>
      <ItemImage src={setImgSrc(itemData.itemImageUrl)} alt={itemData.name} />
      <ItemInfoWrap>
        <LikeAndComment>
          <Like>{itemData.likes}</Like>
          <Comment>{itemData.comments.length}</Comment>
        </LikeAndComment>
        <InstagramLink href={itemData.instagramUrl} target="_blank">
          Instagram 이동하기 {'>'}
        </InstagramLink>
      </ItemInfoWrap>
    </PostItemWrap>
  ) : (
    <ItemLoading />
  );
}

const PostItemWrap = styled.main`
  display: flex;
  flex-direction: column;
  margin: 80px auto 0;
  max-width: 95vw;
`;

const PostAuthorWrap = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
`;

const AuthorImage = styled.img``;

const AuthorName = styled.p``;

const ItemTitle = styled.h2``;

const ItemImage = styled.img`
  position: relative;
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;

  @media screen and (min-width: 420px) {
    height: 500px;
  }
`;

const InstagramLink = styled.a``;

const ItemInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LikeAndComment = styled.div``;

const Like = styled.p``;

const Comment = styled.p``;
