import React, { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

import Icon from "../../components/Icon";
import LogoBranding from "../../components/LogoBranding";

import { Header, LoginHeader, Nav } from "./MobileNavigation.style";

const MobileNavigation: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {currentPath === "/" ? (
        <LoginHeader>
          <LogoBranding />
          <Nav>
            <Link to="/app">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/app">
              <p>Report a Bug</p>
            </Link>
            <Link to="github.com">
              <Icon icon="github" />
            </Link>
            <Link to="google.com">
              <Icon icon="google" />
            </Link>
          </Nav>
        </LoginHeader>
      ) : (
        <Header>
          <Nav>
            <Icon icon="home" />
            <Icon icon="cart" />
            <Icon icon="profile" />
          </Nav>
        </Header>
      )}
    </>
  );
};

export default MobileNavigation;
