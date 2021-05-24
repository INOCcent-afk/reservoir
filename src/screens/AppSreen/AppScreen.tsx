import React, { FC } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import LeftContainer from "../../containers/LeftContainer";
import ProductContainer from "../../containers/ProductContainer";
import RightContainer from "../../containers/RightContainer";

const AppScreen: FC = () => {
  return (
    <>
      <LeftContainer />
      <ProductContainer />
      <RightContainer />
    </>
  );
};

export default AppScreen;
