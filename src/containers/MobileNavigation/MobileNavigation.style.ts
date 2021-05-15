import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";
import { ScreenSize } from "../../assets/styles/ScreenSize";

export const Header = styled.header`
  width: 100%;
  padding: 20px 40px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${Colors.secondaryBackgroundColor};

  @media only screen and (min-width: ${ScreenSize.tabletScreen}) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const LoginHeader = styled(Header)`
  border-top: none;
  padding: 20px;
  max-width: 1300px;
  left: 50%;
  transform: translate(-50%, 0);

  svg {
    fill: ${Colors.primaryFontColor};
  }
  svg:hover,
  p:hover {
    fill: ${Colors.bodyFontColor};
    color: ${Colors.bodyFontColor};
  }
  nav {
    margin: 0;
  }

  .logo-footer {
    display: none;
  }

  @media only screen and (min-width: ${ScreenSize.tabletScreen}) {
    display: flex;
    justify-content: space-between;

    .logo-footer {
      display: block;
    }
  }
`;
