import React from "react";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Box from "../../containers/Box";

import { Container, SocialMediaContainer, Title } from "./Login.styles";

const LogIn = () => {
  return (
    <>
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
            <Button icon={<Icon icon="github" />} text="Log in with Github" />
            <Button icon={<Icon icon="google" />} text="Log in with Google" />
          </SocialMediaContainer>
        </Box>
      </Container>
    </>
  );
};

export default LogIn;
