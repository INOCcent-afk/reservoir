import React from "react";
import Loading from "../../components/Loading";

import CartContainer from "../../containers/CartContainer";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";

import { useAppSelector } from "../../redux/hook";

const Cart = () => {
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
          <CartContainer />
          <RightContainer />
        </>
      )}
    </>
  );
};

export default Cart;
