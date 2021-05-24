import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

export const ButtonContainer = styled.button`
  background: ${Colors.secondaryBackgroundColor};
  border: none;
  border-radius: 8px;
  display: flex;
  padding: 13px 20px;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background: ${Colors.primaryFontColor60};
  }

  svg {
    height: 25px;
    width: 25px;
    margin-right: 8px;
  }

  p {
    color: ${Colors.bodyFontColor};
    font-weight: bold;
    font-size: 15px;
  }
`;

export const ProductButton = styled(ButtonContainer)`
  background: ${Colors.secondaryFontColor};

  align-self: flex-end;

  &:hover {
    background: ${Colors.secondaryFontColor80};
  }
`;
