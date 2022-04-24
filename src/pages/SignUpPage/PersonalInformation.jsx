import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { PALLETS } from 'utils/constants';

export default function PersonalInformation({ handelUserData, signUp }) {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('010');
  const [inputAddress, setInputAddress] = useState('');
  const [inputZipcode, setInputZipcode] = useState(0);

  const [error, setError] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    if (
      error.length === 0 &&
      inputName.length > 0 &&
      inputEmail.length > 0 &&
      inputPhone.length > 0 &&
      inputAddress.length > 0
    ) {
      setError('');
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [error, inputName, inputEmail, inputPhone, inputAddress]);

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);

    const checkEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (checkEmail.test(e.target.value)) {
      setError('');
    } else {
      setError('이메일 형식이 유효하지 않습니다.');
    }
  };

  const handleInputPhone = (e) => {
    setInputPhone(e.target.value);

    const checkPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (checkPhone.test(e.target.value)) {
      setError('');
    } else {
      setError('전화번호 형식이 유효하지 않습니다.');
    }
  };

  const handleInputAddress = (e) => {
    setInputAddress(e.target.value);
  };

  const handleSignUpBtn = () => {
    handelUserData('nickname', inputName);
    handelUserData('email', inputEmail);
    handelUserData('mobile', inputPhone);
    handelUserData('address', inputAddress);
    handelUserData('zipcode', inputZipcode);

    signUp();
    navigate('/');
  };

  return (
    <>
      <SignUpPageWrap>
        <Form method="get">
          <label>사용자 이름</label>
          <input
            type="text"
            placeholder="사용자 이름 입력"
            required
            autoFocus
            value={inputName}
            onChange={handleInputName}
            className="mb-25"
          />
          <label>이메일</label>
          <input
            type="text"
            placeholder="이메일 입력"
            required
            value={inputEmail}
            onChange={handleInputEmail}
            className="mb-25"
          />
          <label>전화번호</label>
          <input
            type="number"
            placeholder="전화번호 입력"
            required
            value={inputPhone}
            onChange={handleInputPhone}
            className="mb-25"
          />
          <label>주소(수정 예정)</label>
          <input
            type="text"
            placeholder="주소 입력"
            required
            value={inputAddress}
            onChange={handleInputAddress}
            className="mb-25"
          />
        </Form>
        <ErrorText>{error}</ErrorText>

        <SignUpButton
          type="button"
          disabled={disabledBtn}
          onClick={handleSignUpBtn}
        >
          가입하기
        </SignUpButton>
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

  .mb-25 {
    margin-bottom: 25px;
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

const SignUpButton = styled.button`
  background-color: ${PALLETS.PURPLE};
  color: ${PALLETS.WHITE};
  padding: 15px 0;
  width: 80%;

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
  animation: blink 1s linear infinite alternate;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
