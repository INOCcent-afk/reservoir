import React, { FC } from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";

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
            <Link to="/">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/">
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
            <NavLink to="/app" activeClassName="activeMobileLink">
              <Icon icon="home" />
            </NavLink>
            <NavLink to="/cart" activeClassName="activeMobileLink">
              <Icon icon="cart" />
            </NavLink>
            <NavLink to="/profile" activeClassName="activeMobileLink">
              <Icon icon="profile" />
            </NavLink>
          </Nav>
        </Header>
      )}
    </>
  );
};

export default MobileNavigation;
