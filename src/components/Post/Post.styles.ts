import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

export const Container = styled.div`
  border-top: 1px solid ${Colors.primaryFontColor60};
  padding: 10px;

  span,
  p {
    font-size: 13px;
    margin: 0;
  }
  span {
    color: ${Colors.bodyFontColor};
  }
  p {
    margin-top: 5px !important;
  }

  &:hover {
    background: ${Colors.primaryFontColor60};
  }
`;
