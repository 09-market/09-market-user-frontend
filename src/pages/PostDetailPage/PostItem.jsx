import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import axios from '../../api/axios';

export default function PostItem() {
  const postId = useParams().postId;
  const [itemData, setItemData] = useState({});

  const getPostItem = async () => {
    const res = await axios
      .get(`api/item/${postId}`)
      .then((res) => {
        console.log(res);
        setItemData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <PostItemWrap>
      <ItemImage src="" alt="" />
      <InstagramLink to="">Instagram 이동하기</InstagramLink>
      <ItemTitle></ItemTitle>
      <ItemInfoWrap>
        <ItemLike></ItemLike>
        <ItemComment></ItemComment>
      </ItemInfoWrap>
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

const InstagramLink = styled(Link)``;

const ItemTitle = styled.h2``;

const ItemInfoWrap = styled.div``;

const ItemLike = styled.p``;

const ItemComment = styled.p``;
