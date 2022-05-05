import React, { useState } from 'react';
import styled from 'styled-components';

export default function UserInfo() {
  const userId = localStorage.getItem('userId');
  const [userData, setUserData] = useState({
    point: 0,
  });

  return (
    <UserInfoWrap>
      <UserNameWrap>
        <UserName>{userId}</UserName> 님
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
