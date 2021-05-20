import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";
import { ScreenSize } from "../../assets/styles/ScreenSize";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px;

  @media only screen and (min-width: ${ScreenSize.laptopScreen}) {
    padding: 40px 20px;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: ${ScreenSize.tabletScreen}) {
    display: none;
  }
`;

export const ProfilePictureContainer = styled.div`
  position: relative;

  img {
    width: 30px;
  }
  .image-container {
    overflow: hidden;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    cursor: pointer;
  }

  .circle {
    position: absolute;
    z-index: 20;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    bottom: 0;
    right: 0;
    background: ${Colors.secondaryFontColor};
  }
  @media only screen and (min-width: ${ScreenSize.laptopScreen}) {
    .image-container {
      width: 40px;
      height: 40px;
    }
    img {
      width: 40px;
    }
  }
`;

export const DesktopHeader = styled.div`
  display: none;

  @media only screen and (min-width: ${ScreenSize.tabletScreen}) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 768px;
    margin: 0 auto;
    flex: auto 1 auto;

    > :nth-child(1) {
      flex-basis: 10%;
    }
    > :nth-child(2) {
      flex-basis: 1;
      margin: 0 30px;
    }
    > :nth-child(3) {
      flex-basis: 30px;
    }
  }

  @media only screen and (min-width: ${ScreenSize.laptopScreen}) {
    max-width: 1300px;
    > :nth-child(1) {
      flex-basis: 33%;
    }
    > :nth-child(2) {
      flex-basis: 60%;
    }
    > :nth-child(3) {
      flex-basis: 25%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
