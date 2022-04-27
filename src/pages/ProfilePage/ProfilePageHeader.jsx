import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'utils/constants';

export default function ProfilePageHeader({ userName }) {
  return (
    <ProfilePageHeaderWrap>
      <Title>
        {userName} 님<span className="blind">프로필</span>
      </Title>
      <OptionButton type="button" title="검색 버튼" />
    </ProfilePageHeaderWrap>
  );
}

const ProfilePageHeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${PALLETS.PURPLE};
  z-index: 9999;
`;

const Title = styled.h1`
  color: ${PALLETS.WHITE};
`;

const OptionButton = styled.button`
  position: absolute;
  right: 7vw;
  width: 25px;
  height: 25px;
  background-image: url('/images/option.png');
  background-size: cover;
`;
