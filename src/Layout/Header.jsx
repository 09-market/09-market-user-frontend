import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PALLETS } from 'utils/constants';
import { isLogined } from 'utils/isLogined';

import ProfileModal from 'components/ProfileModal';

export default function Header() {
  const [profileClicked, setProfileClicked] = useState(false);
  const [userId, setUserId] = useState();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let prevScrollTop = 0;
    window.addEventListener('scroll', () => {
      const nextScrollTop = window.pageYOffset || 0;
      if (nextScrollTop > prevScrollTop) {
        setHide(true);
      } else if (nextScrollTop < prevScrollTop) {
        setHide(false);
      }
      prevScrollTop = nextScrollTop;
    });

    return () => {
      window.addEventListener('scroll', () => {});
    };
  }, []);

  const ProfileItem = () => {
    if (isLogined()) {
      return (
        <LoginedProfile
          type="button"
          onClick={() => setProfileClicked(!profileClicked)}
        >
          {profileClicked && (
            <ProfileModal
              setProfileClicked={setProfileClicked}
              userId={userId}
            />
          )}
        </LoginedProfile>
      );
    } else {
      return <Link to="/signin">로그인</Link>;
    }
  };

  return (
    <HeaderWrap className={hide && 'header-sticky'}>
      <Logo onClick={() => (document.documentElement.scrollTop = 0)}>
        공구
        <span className="logo-color">마켓</span>
      </Logo>
      <ProfileItem />
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 7vw;
  background-color: ${PALLETS.PURPLE};
  color: ${PALLETS.WHITE};
  transition: all 0.3s;

  &.header-sticky {
    transform: translateY(-100px);
  }
`;

const Logo = styled.h1`
  font-family: 'GmarketSansBold';
  font-size: 2rem;

  .logo-color {
    color: ${PALLETS.SKY_BLUE};
  }
`;

const LoginedProfile = styled.div`
  width: 35px;
  height: 35px;
  background-image: url('/images/profile.png');
  background-size: cover;
  border-radius: 50%;
`;
