import React from 'react';
import styled from 'styled-components';

export default function Nav() {
  return (
    <NavWrap>
      <NavContainer>
        <NavItem />
      </NavContainer>
    </NavWrap>
  );
}

const NavWrap = styled.nav``;

const NavContainer = styled.ul``;

const NavItem = styled.li``;
