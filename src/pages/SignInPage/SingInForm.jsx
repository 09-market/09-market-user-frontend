import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import axios from '../../api/axios';
import { PALLETS } from 'utils/constants';

export default function SingInForm() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleUserData = (key, value) => {
    setUserData((prevObject) => ({ ...prevObject, [key]: value }));
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
    handleUserData('email', e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
    handleUserData('password', e.target.value);
  };

  const handleSignInBtn = async () => {
    try {
      await axios.post('/auth/signin', {
        email: userData.email,
        password: userData.password,
      });
      localStorage.setItem('userId', userData.email);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form method="post">
      <label className="blind">아이디 입력</label>
      <input
        type="text"
        required
        placeholder="아이디 입력"
        value={inputEmail}
        onChange={handleInputEmail}
      />
      <label className="blind">비밀번호 입력</label>
      <input
        type="password"
        required
        placeholder="비밀번호 입력"
        value={inputPw}
        onChange={handleInputPw}
      />
      {/* <strong>{res.error}</strong> */}
      <SignInButton type="button" onClick={handleSignInBtn}>
        로그인
      </SignInButton>
    </Form>
  );
}

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
