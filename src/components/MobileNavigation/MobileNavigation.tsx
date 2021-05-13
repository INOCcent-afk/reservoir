import React, { FC } from "react";
import { useLocation } from "react-router";

import Icon from "../Icon";

import { Header, Nav } from "./MobileNavigation.style";

type Props = {};

const MobileNavigation: FC<Props> = (props: Props) => {
  const location = useLocation();

  const currentPath = location.pathname;
  return (
    <>
      {currentPath === "/" ? (
        <h1>HELLO WORLD</h1>
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
