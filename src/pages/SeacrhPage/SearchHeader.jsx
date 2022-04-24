import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PALLETS } from 'utils/constants';

export default function SearchHeader() {
  const navigate = useNavigate();

  return (
    <SearchHeaderWrap>
      <h1 className="blind">검색 페이지</h1>
      <SearchButton>
        <span className="blind">검색 버튼</span>
      </SearchButton>
      <SearchInput type="text" autoFocus placeholder="검색어를 입력하세요." />
      <CancelButton
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        취소
      </CancelButton>
    </SearchHeaderWrap>
  );
}

const SearchHeaderWrap = styled.header`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  padding: 0 7vw;
  background-color: ${PALLETS.PURPLE};
  color: ${PALLETS.WHITE};
`;

const SearchButton = styled.button`
  width: 25px;
  height: 25px;
  background-image: url('/images/search.png');
  background-size: cover;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: calc(100vw - 14vw - 80px);
  margin: 0 10px;
  padding: 5px 0 5px 10px;
  border-radius: 5px;
  animation: searchBar 0.5s ease-out;

  @keyframes searchBar {
    0% {
      width: 0;
    }
    100% {
      width: calc(100vw - 14vw - 80px);
    }
  }
`;

const CancelButton = styled.button`
  color: ${PALLETS.WHITE};
`;
