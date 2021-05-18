import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

export const Input = styled.input`
  border-radius: 6px;
  padding: 15px 10px;
  border: none;
  color: ${Colors.primaryFontColor};
  width: 100%;
  margin-left: 20px;
  background: ${Colors.primaryFontColor60};
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Colors.primaryFontColor};
  }
`;
