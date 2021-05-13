import React from "react";

import Icon from "../Icon";
import { Header, Nav } from "./MobileNavigation.style";

const MobileNavigation = () => {
  return (
    <>
      <Header>
        <Nav>
          <Icon icon="home" />
          <Icon icon="cart" />
          <Icon icon="profile" />
        </Nav>
      </Header>
    </>
  );
};

export default MobileNavigation;
