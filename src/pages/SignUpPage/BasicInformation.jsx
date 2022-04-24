import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { PALLETS } from 'utils/constants';

export default function BasicInformation({ setStep, handelUserData }) {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputPwVerify, setInputPwVerify] = useState('');
  const [error, setError] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    if (
      error.length === 0 &&
      inputId.length > 0 &&
      inputPw.length > 0 &&
      inputPwVerify.length > 0 &&
      inputPw === inputPwVerify
    ) {
      setError('');
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [error, inputId, inputPw, inputPwVerify]);

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputPwVerify = (e) => {
    setInputPwVerify(e.target.value);
    if (e.target.value === inputPw) {
      setError('');
    } else {
      setError('비밀번호가 일지하지 않습니다.');
    }
  };

  const handleNextBtn = () => {
    setStep('Personal');
    handelUserData('id', inputId);
    handelUserData('password', inputPw);
  };

  return (
    <>
      <SignUpPageWrap>
        <Form method="get">
          <label>아이디</label>
          <InputIdWrap className="mb-30">
            <input
              type="text"
              placeholder="아이디 입력"
              required
              autoFocus
              value={inputId}
              onChange={handleInputId}
            />
          </InputIdWrap>
          <InputPwWrap>
            <legend className="blind">비밀번호 입력 및 확인</legend>
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호 입력"
              required
              value={inputPw}
              onChange={handleInputPw}
            />
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호 확인"
              required
              value={inputPwVerify}
              onChange={handleInputPwVerify}
              onBlur={handleInputPwVerify}
            />
          </InputPwWrap>
          <ErrorText>{error}</ErrorText>
        </Form>
        <NextButton
          type="button"
          onClick={handleNextBtn}
          disabled={disabledBtn}
        >
          다음
        </NextButton>
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px 10px;

  input {
    border: 1px solid ${PALLETS.LIGHT_GRAY};
    padding: 10px;
    margin-bottom: 10px;
  }

  label {
    margin: 0 0 5px 10px;
  }
`;

const InputIdWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const InputPwWrap = styled(InputIdWrap)`
  margin-bottom: 0;
`;

const NextButton = styled.button`
  width: 80%;
  background-color: ${PALLETS.PURPLE};
  color: ${PALLETS.WHITE};
  padding: 15px 0;

  &:disabled {
    cursor: inherit;
    opacity: 0.5;
  }
`;

const ErrorText = styled.strong`
  position: absolute;
  bottom: 5px;
  color: rgba(255, 0, 0, 0.7);
  font-size: 0.8rem;
  animation: blink 0.5s 3 linear;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
