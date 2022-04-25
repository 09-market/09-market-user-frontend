import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { defaultAxios } from 'utils/axiosFunc';
import { isLogined } from 'utils/isLogined';

import GoBackHeader from 'components/GoBackHeader';
import BasicInformation from './BasicInformation';
import PersonalInformation from './PersonalInformation';
import axios from 'axios';

export default function SignUpPage() {
  const [step, setStep] = useState('basic');
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    nickname: '',
    mobile: '',
    address: '',
    zipcode: 0,
  });

  const handelUserData = async ({ key, value }) => {
    setUserData((prevObject) => {
      return { ...prevObject, [key]: value };
    });
  };

  // 회원가입 요청 부분 수정해야함
  const signUp = async () => {
    try {
      await axios.post('http://localhost:8080/api/auth/signup', {
        data: {
          email: userData.email,
          password: userData.password,
          nickname: userData.nickname,
          mobile: userData.mobile,
          address: userData.address,
          zipcode: userData.zipcode,
        },
      });
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
        <BasicInformation setStep={setStep} handelUserData={handelUserData} />
      </>
    ) : (
      <>
        <GoBackHeader headerTitle={'회원가입'} setStep={setStep} />
        <PersonalInformation handelUserData={handelUserData} signUp={signUp} />
      </>
    );
  }
}
