import React, { FC } from "react";
import CheckoutMessage from "../../components/CheckoutMessage";

import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

const LeftContainer: FC = () => {
  return (
    <Container className="none-sm block-lg">
      <CheckoutMessage />
    </Container>
  );
};

export default LeftContainer;

export const Container = styled.div`
  padding: 10px;

  h1 {
    margin-bottom: 5px;
    a {
      color: ${Colors.bodyFontColor};
    }
  }
  span {
    margin: 0;
  }
`;
