import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import LogoBranding from "../../components/LogoBranding";

import socialMediaAuth from "../../utils/auth";

import Box from "../../containers/Box";

import {
  Container,
  SocialMediaContainer,
  Title,
  LogoContainer,
} from "./Login.styles";

import { githubProvider, googleProvider } from "../../config/authMethod";

import firebase from "../../config/firebase-config";

const LogIn = () => {
  const history = useHistory();

  const handleLogIn = async (provider: any) => {
    await socialMediaAuth(provider);

    history.push("/app");
  };

  return (
    <>
      <LogoContainer>
        <LogoBranding />
      </LogoContainer>
      <Container>
        <Box>
          <SocialMediaContainer>
            <Title>
              <h1>Welcome</h1>
              <p>
                By logging in, you accept our
                <span>
                  Privacy <br /> Policy
                </span>
                and
                <span>Terms of Service</span>
              </p>
            </Title>
            <div onClick={() => handleLogIn(githubProvider)}>
              <Button icon={<Icon icon="github" />} text="Log in with Github" />
            </div>
            <div onClick={() => handleLogIn(googleProvider)}>
              <Button icon={<Icon icon="google" />} text="Log in with Google" />
            </div>
          </SocialMediaContainer>
        </Box>
      </Container>
    </>
  );
};

export default LogIn;
