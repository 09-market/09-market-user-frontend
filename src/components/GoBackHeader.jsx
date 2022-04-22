import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function GoBackHeader({ headerTitle, setStep }) {
  const navigate = useNavigate();
  return (
    <GoBackHeaderWrap>
      <GoBackButton
        type="button"
        onClick={() => {
          setStep ? setStep('basic') : navigate(-1);
        }}
      >
        <span className="blind">뒤로가기 버튼</span>
        {'<'}
      </GoBackButton>
      {headerTitle && <h2>{headerTitle}</h2>}
    </GoBackHeaderWrap>
  );
}

const GoBackHeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const GoBackButton = styled.button`
  position: absolute;
  left: 20px;
  font-size: 1.5rem;
`;