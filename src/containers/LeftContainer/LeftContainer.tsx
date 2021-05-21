import React, { FC } from "react";

import styled from "styled-components";

const LeftContainer: FC = () => {
  return (
    <Container className="none-sm block-lg">
      <h1>Your cart</h1>
      <p>You have 0 items in cart right now</p>
    </Container>
  );
};

export default LeftContainer;

export const Container = styled.div`
  padding: 10px;
  h1 {
    margin-bottom: 5px;
  }
`;
