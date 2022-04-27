import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { defaultAxios } from 'utils/axiosFunc';
import { isLogined } from 'utils/isLogined';

import GoBackHeader from 'components/GoBackHeader';
import BasicInformation from './BasicInformation';
import PersonalInformation from './PersonalInformation';
import axios from 'axios';

export default function SignUpPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState('basic');
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    nickname: '',
    mobile: '',
    address: '',
    zipcode: 0,
  });

  const handleUserData = (key, value) => {
    setUserData((prevObject) => ({ ...prevObject, [key]: value }));
  };

  // 회원가입 요청 부분 수정해야함
  const signUp = async () => {
    try {
      await axios.post('http://localhost:8080/api/auth/signup', null, {
        data: {
          email: userData.email,
          password: userData.password,
          nickname: userData.nickname,
          mobile: userData.mobile,
          address: userData.address,
          zipcode: userData.zipcode,
        },
      });
      navigate('/signin');
    } catch (err) {
      console.log(err);
    }
  };

  if (isLogined()) {
    return <Navigate replace to="/" />;
  } else {
    return step === 'basic' ? (
      <>
        <GoBackHeader headerTitle={'회원가입'} />
        <BasicInformation setStep={setStep} handleUserData={handleUserData} />
      </>
    ) : (
      <>
        <GoBackHeader headerTitle={'회원가입'} setStep={setStep} />
        <PersonalInformation handleUserData={handleUserData} signUp={signUp} />
      </>
    );
  }
}
