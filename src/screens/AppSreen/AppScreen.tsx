import React, { FC } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loading from "../../components/Loading";

import LeftContainer from "../../containers/LeftContainer";
import ProductContainer from "../../containers/ProductContainer";
import RightContainer from "../../containers/RightContainer";

const AppScreen: FC = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 800);
  }, []);

  return (
    <>
      {!show ? (
        <Loading />
      ) : (
        <>
          <LeftContainer />
          <ProductContainer />
          <RightContainer />
        </>
      )}
    </>
  );
};

export default AppScreen;
