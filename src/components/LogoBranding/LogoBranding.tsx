import React from "react";

import LogoImage from "../../assets/icons/logo-branding.png";
import { LogoContainer } from "./LogoBranding.styles";

const LogoBranding = () => {
  return (
    <LogoContainer className="logo-footer logo-login">
      <img src={LogoImage} alt="logo-branding" />
    </LogoContainer>
  );
};

export default LogoBranding;
