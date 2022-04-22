import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import { isLogined } from 'utils/isLogined';

import GoBackHeader from 'components/GoBackHeader';
import BasicInformation from './BasicInformation';
import PersonalInformation from './PersonalInformation';

export default function SignUpPage() {
  const [step, setStep] = useState('basic');
  const [userData, setUserData] = useState({
    id: '',
    password: '',
    nickname: '',
    email: '',
    mobile: '',
    address: '',
    zipcode: 0,
  });

  const handelUserData = ({ key, value }) => {
    setUserData((prevObject) => {
      return { ...prevObject, [key]: value };
    });
  };

  // 회원가입 요청 부분 수정해야함
  const submitUserData = async () => {
    try {
      const request = await axios.post();
    } catch (err) {
      console.log(err);
    }
  };

  if (isLogined()) {
    return <Navigate replace to="/" />;
  } else {
    if (step === 'basic') {
      return (
        <>
          <GoBackHeader headerTitle={'회원가입'} />
          <BasicInformation setStep={setStep} handelUserData={handelUserData} />
        </>
      );
    } else {
      return (
        <>
          <GoBackHeader headerTitle={'회원가입'} setStep={setStep} />
          <PersonalInformation handelUserData={handelUserData} />
        </>
      );
    }
  }
}
