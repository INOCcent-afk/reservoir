import React, { FC } from "react";

import Loader from "react-loader-spinner";

import { Colors } from "../../assets/styles/Colors";
import { LoaderContainer } from "./Loading.styes";

const Loading: FC = () => {
  return (
    <LoaderContainer>
      <Loader
        type="TailSpin"
        color={Colors.secondaryFontColor}
        height={80}
        width={80}
      />
    </LoaderContainer>
  );
};

export default Loading;
