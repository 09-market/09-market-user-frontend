import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import axios from '../../api/axios';

export default function PostItem() {
  const postId = useParams().postId;
  const [itemData, setItemData] = useState({});

  const getPostItem = async () => {
    await axios
      .get(`api/item/${postId}`)
      .then((res) => {
        console.log(res);
        setItemData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <PostItemWrap>
      <PostAuthorWrap>
        <AuthorImage src="" alt="" />
        <AuthorName></AuthorName>
      </PostAuthorWrap>
      <ItemImage src="/images/example_1.jpg" alt="" />
      <InstagramLink to="">Instagram 이동하기 {'>'}</InstagramLink>
      <ItemTitle></ItemTitle>
      <ItemInfoWrap>
        <ItemLike></ItemLike>
        <ItemComment></ItemComment>
      </ItemInfoWrap>
    </PostItemWrap>
  );
}

const PostItemWrap = styled.main`
  display: flex;
  flex-direction: column;
  margin: 80px auto 0;
  width: 95vw;
`;

const PostAuthorWrap = styled.div``;

const AuthorImage = styled.img``;

const AuthorName = styled.p``;

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
