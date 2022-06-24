import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

import ButtonAsLink from './ButtonAsLink';

const UserState = styled.div`
  margin-left: auto;
`;
const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;
const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const Header = () => {
  const nav = useNavigate();
  const auth = !!localStorage.getItem('token');
  return (
    <HeaderBar>
      <img src={logo} alt="Notedly Logo" height="40" />
      <Link to="/">
        <LogoText>Notedly</LogoText>
      </Link>
      <UserState>
        {auth ? (
          <ButtonAsLink
            onClick={() => {
              localStorage.removeItem('token');
              nav('/');
              window.location.reload();
            }}>
            Logout
          </ButtonAsLink>
        ) : (
          <p>
            <Link to={'/signin'}>Sign In</Link> or <Link to={'/signup'}>Sign Up</Link>
          </p>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default Header;
