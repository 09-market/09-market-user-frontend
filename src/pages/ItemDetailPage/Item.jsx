import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import axios from '../../api/axios';

export default function Item() {
  const itemid = useParams().itemid;
  const [itemData, setItemData] = useState({});

  const getItem = async () => {
    await axios
      .get(`api/item/${itemid}`)
      .then((res) => {
        setItemData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <PostItemWrap>
      <PostAuthorWrap to="">
        <AuthorImage src="" alt="" />
        <AuthorName></AuthorName>
      </PostAuthorWrap>
      <ItemTitle></ItemTitle>
      <ItemImage src="/images/example_1.jpg" alt="" />
      <ItemInfoWrap>
        <LikeAndComment>
          <Like></Like>
          <Comment></Comment>
        </LikeAndComment>
        <InstagramLink href="https://www.instagram.com/" target="_blank">
          Instagram 이동하기 {'>'}
        </InstagramLink>
      </ItemInfoWrap>
    </PostItemWrap>
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
