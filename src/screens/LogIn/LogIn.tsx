import React from "react";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Box from "../../containers/Box";

import { Container, SocialMediaContainer } from "./Login.styles";

const LogIn = () => {
  return (
    <>
      <Container>
        <Box>
          <SocialMediaContainer>
            <Button icon={<Icon icon="github" />} text="Log in with Github" />
            <Button icon={<Icon icon="github" />} text="Log in with Github" />
          </SocialMediaContainer>
        </Box>
      </Container>
    </>
  );
};

export default LogIn;
