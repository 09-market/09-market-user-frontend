import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import styled from 'styled-components';
import { PALLETS } from 'utils/constants';
import { isLogined } from 'utils/isLogined';

import GoBackHeader from 'components/GoBackHeader';

export default function SignInPage() {
  if (isLogined()) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <>
        <GoBackHeader />
        <SignInPageWrap>
          <h2 className="blind">로그인 페이지</h2>
          <Link to="/" className="link-home">
            공구<span>마켓</span>
          </Link>
          <Form method="post">
            <label className="blind">아이디 입력</label>
            <input type="text" required placeholder="아이디 입력" />
            <label className="blind">비밀번호 입력</label>
            <input type="password" required placeholder="비밀번호 입력" />
            {/* <strong className="error">{res.error}</strong> */}
            <SignInButton type="button" className="btn-login">
              로그인
            </SignInButton>
          </Form>
          <Link to="/signup">회원가입</Link>
        </SignInPageWrap>
      </>
    );
  }
}
const SignInPageWrap = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .link-home {
    font-size: 2.5rem;
    font-family: 'GmarketSansBold';
    color: ${PALLETS.PURPLE};
    animation: scale 0.3s ease-out;

    @keyframes scale {
      0% {
        transform: scale(0.5);
      }
      100 % {
        transform: scale(1);
      }
    }
    span {
      color: ${PALLETS.SKY_BLUE};
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px 10px;

  input {
    border: 1px solid ${PALLETS.LIGHT_GRAY};
    padding: 10px;
    margin-bottom: 10px;
  }
`;

const SignInButton = styled.button`
  background-color: ${PALLETS.PURPLE};
  color: ${PALLETS.WHITE};
  padding: 15px 0;
`;
