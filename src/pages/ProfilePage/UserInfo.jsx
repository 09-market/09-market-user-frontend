import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from '../../api/axios';

export default function UserInfo() {
  const [userData, setUserData] = useState({});

  const getUserProfile = async () => {
    const userId = localStorage.getItem('userId');
    const userToken = localStorage.getItem('token');

    await axios
      .get(`/user/${userId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <UserInfoWrap>
      <UserNameWrap>
        <UserName>{userData.nickname}</UserName> 님
        <span className="blind">프로필 페이지</span>
      </UserNameWrap>
      <UserPoint>
        보유포인트 : <span>{userData.point}</span> 점
      </UserPoint>
    </UserInfoWrap>
  );
}

const UserInfoWrap = styled.section`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const UserNameWrap = styled.h1``;

const UserName = styled.span`
  font-family: 'GmarketSansBold';
  font-size: 1.3rem;
`;

const UserPoint = styled.p`
  span {
    font-family: 'GmarketSansBold';
    font-size: 1.3rem;
  }
`;
