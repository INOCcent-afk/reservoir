import React, { FC } from "react";

import Loader from "react-loader-spinner";

import { Colors } from "../../assets/styles/Colors";
import styled from "styled-components";

const Loading: FC = () => {
  return (
    <LoaderContainer>
      <Loader
        type="TailSpin"
        color={Colors.secondaryFontColor}
        height={80}
        width={80}
        timeout={3000}
      />
    </LoaderContainer>
  );
};

export default Loading;

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 80px;
    height: 80px;
  }
`;
