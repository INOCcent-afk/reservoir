import React from "react";
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
import Loading from "../../components/Loading";

const LogIn = () => {
  const history = useHistory();
  const [show, setShow] = React.useState(false);

  const handleLogIn = async (provider: any) => {
    await socialMediaAuth(provider);

    history.push("/app");
  };

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [history]);

  return (
    <>
      {!show ? (
        <Loading />
      ) : (
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
                  <Button
                    type="normalBTN"
                    icon={<Icon icon="github" />}
                    text="Log in with Github"
                  />
                </div>
                <div onClick={() => handleLogIn(googleProvider)}>
                  <Button
                    type="normalBTN"
                    icon={<Icon icon="google" />}
                    text="Log in with Google"
                  />
                </div>
              </SocialMediaContainer>
            </Box>
          </Container>
        </>
      )}
    </>
  );
};

export default LogIn;
