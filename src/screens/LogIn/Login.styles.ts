import styled from "styled-components";
import { ScreenSize } from "../../assets/styles/ScreenSize";

export const Container = styled.div`
  max-width: 400px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  & > div {
    width: 400px !important;
  }
`;

export const SocialMediaContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.div`
  margin-bottom: 40px;

  h1 {
    margin: 10px 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  left: 49%;
  transform: translate(-49%, 50px);

  @media only screen and (min-width: ${ScreenSize.tabletScreen}) {
    display: none;
  }
`;
