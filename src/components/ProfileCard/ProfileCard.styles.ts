import { Colors } from "../../assets/styles/Colors";
import styled from "styled-components";

export const ProfileCardTitle = styled.div`
  display: flex;
  cursor: pointer;
`;
export const ProfileCardImage = styled.div`
  overflow: hidden;
  border-radius: 100%;
  width: 80px;
  height: 80px;

  img {
    width: 80px;
  }
`;
export const ProfileCardInfo = styled.div`
  padding: 10px;

  p:first-child {
    font-weight: bold;
    color: ${Colors.bodyFontColor};
  }
`;

export const BigCardImage = styled(ProfileCardImage)`
  margin-top: -50px;
  border: 5px solid ${Colors.primaryBackgroundColor};

  width: 100px;
  height: 100px;

  img {
    width: 100px;
  }
`;

export const BigCardInfo = styled(ProfileCardInfo)`
  padding: 20px 0;

  p:first-child {
    font-size: 20px;
  }
`;
