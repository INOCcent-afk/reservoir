import React from "react";

import styled from "styled-components";

const Thankyou = () => {
  return (
    <>
      <Container>
        <h1>THANK YOU FOR PURCHASING!</h1>
      </Container>
    </>
  );
};

export default Thankyou;

export const Container = styled.div`
  flex-basis: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: calc(85vh - 30px);
`;
