import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'utils/constants';
import { Link } from 'react-router-dom';

export default function ProfileModal({
  profileClicked,
  setProfileClicked,
  userId,
}) {
  return (
    <>
      <ModalContainer
        profileClicked
        onClick={() => setProfileClicked(!profileClicked)}
      >
        <ModalItem>
          <Link to={`/profile/${userId}`}>회원정보 수정</Link>
        </ModalItem>
        <ModalItem>
          <Link to="">로그아웃</Link>
        </ModalItem>
      </ModalContainer>
      <BackGround onClick={() => setProfileClicked(false)} />
    </>
  );
}

const ModalContainer = styled.ul`
  display: ${(props) => (props.profileClicked ? 'block' : 'none')};
  position: fixed;
  bottom: 0;
  left: 0;
  color: ${PALLETS.PURPLE};
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

const BackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;
