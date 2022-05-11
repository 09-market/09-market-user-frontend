import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PALLETS } from 'utils/constants';
import axios from '../api/axios';

export default function OptionModal({ optionClicked, setOptionClicked }) {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate('/signin');
  };

  // const logOut = async (userData) => {
  //   const userToken = localStorage.getItem('token');

  //   axios
  //     .post('/auth/logout', {
  //       headers: { Authorization: `Bearer ${userToken}` },
  //     })
  //     .then(() => {
  //       localStorage.clear();
  //       navigate('/signin');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <ModalContainer
        optionClicked
        onClick={() => setOptionClicked(!optionClicked)}
      >
        <ModalItem>
          <Link to={`/profile/modify`}>회원정보 수정</Link>
        </ModalItem>
        <ModalItem>
          <LogOutBtn type="button" onClick={logOut}>
            로그아웃
          </LogOutBtn>
        </ModalItem>
      </ModalContainer>
      <BackGround onClick={() => setOptionClicked(false)} />
    </>
  );
}

const ModalContainer = styled.ul`
  display: ${(props) => (props.profileClicked ? 'block' : 'none')};
  position: fixed;
  bottom: 0;
  left: 0;
  color: ${PALLETS.BLACK};
  background-color: ${PALLETS.WHITE};
  border: 1px solid ${PALLETS.PURPLE};
  border-bottom: none;
  border-radius: 15px 15px 0 0;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px;

  animation: modal 0.3s ease-out;
  z-index: 9999;

  @keyframes modal {
    0% {
      transform: translateY(100%);
    }
    100 % {
      transform: translateY(0);
    }
  }
`;

const ModalItem = styled.li`
  & + li {
    margin-top: 20px;
  }
`;

const LogOutBtn = styled.button`
  color: ${PALLETS.BLACK};
`;

const BackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;
