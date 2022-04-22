import React from 'react';
import styled from 'styled-components';

import { PALLETS } from 'utils/constants';

export default function BasicInformation({ setStep, handelUserData }) {
  return (
    <>
      <SignUpPageWrap>
        <Form method="get">
          <label>아이디</label>
          <input
            type="text"
            required
            placeholder="아이디 입력"
            className="mb-30"
          />
          <InputPwWrap className="mb-30">
            <legend className="blind">비밀번호 입력 및 확인</legend>
            <label>비밀번호</label>
            <input type="password" required placeholder="비밀번호 입력" />
            <label>비밀번호 확인</label>
            <input type="password" required placeholder="비밀번호 확인" />
          </InputPwWrap>
          {/* <strong className="error">{res.error}</strong> */}
          <SignUpButton type="button" className="btn-login" onClick={setStep}>
            다음
          </SignUpButton>
        </Form>
      </SignUpPageWrap>
    </>
  );
}

const SignUpPageWrap = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px 10px;

  .mb-30 {
    margin-bottom: 30px;
  }

  input {
    border: 1px solid ${PALLETS.LIGHT_GRAY};
    padding: 10px;
    margin-bottom: 10px;
  }

  label {
    margin: 0 0 5px 10px;
  }
`;

const InputPwWrap = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

const SignUpButton = styled.button`
  background-color: ${PALLETS.PURPLE};
  color: ${PALLETS.WHITE};
  padding: 15px 0;
`;
