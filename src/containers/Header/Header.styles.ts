import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

export const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  padding: 20px 20px;
`;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePictureContainer = styled.div`
  position: relative;

  img {
    width: 30px;
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

  .image-container {
    overflow: hidden;
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;
