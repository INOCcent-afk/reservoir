import React from "react";

import CartContainer from "../../containers/CartContainer";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";

const Cart = () => {
  return (
    <>
      <LeftContainer />
      <CartContainer />
      <RightContainer />
    </>
  );
};

export default Cart;
