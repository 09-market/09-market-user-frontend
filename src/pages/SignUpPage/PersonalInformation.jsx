import React from 'react';
import styled from 'styled-components';

import { PALLETS } from 'utils/constants';

export default function PersonalInformation({ handelUserData }) {
  return (
    <>
      <SignUpPageWrap>
        <Form method="get">
          <label>사용자 이름</label>
          <input
            type="text"
            required
            placeholder="사용자 이름 입력"
            className="mb-30"
          />
          <label>이메일</label>
          <input
            type="text"
            required
            placeholder="이메일 입력"
            className="mb-30"
          />
          <label>전화번호</label>
          <input
            type="text"
            required
            placeholder="전화번호 입력"
            className="mb-30"
          />
          <label>주소(수정 예정)</label>
          <input
            type="text"
            required
            placeholder="주소 입력"
            className="mb-30"
          />
          {/* <strong className="error">{res.error}</strong> */}
          <SignUpButton type="button" className="btn-login">
            가입하기
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
