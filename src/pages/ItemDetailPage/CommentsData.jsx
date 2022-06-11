import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import axios from '../../api/axios';

export default function CommentsData() {
  const itemId = useParams().itemId;
  const [commentsData, setCommentsData] = useState([]);

  const getComments = useCallback(async () => {
    await axios
      .get(`/item/detail/${itemId}`)
      .then((res) => setCommentsData(res.data.comments.reverse()))
      .catch((err) => console.log(err));
  }, [itemId]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <CommentsWrap>
      <CommentsList>
        {commentsData.map((item) => (
          <CommentsItem key={item.id}>{item.content}</CommentsItem>
        ))}
      </CommentsList>
    </CommentsWrap>
  );
}

const CommentsWrap = styled.section``;

const CommentsList = styled.ul``;

const CommentsItem = styled.li``;
