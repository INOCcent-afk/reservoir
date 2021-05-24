import React, { FC } from "react";

import { Link } from "react-router-dom";

import { useAppSelector } from "../../redux/hook";

const CheckoutMessage: FC = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  const [cartCount, setCartCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [totalItems, setTotalItems] = React.useState(0);

  const checkPath = window.location.pathname.includes("/cart");

  React.useEffect(() => {
    let count = 0;
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      count += item.qty!;
      items += item.qty!;
      price += item.qty! * item.price!;
    });

    setTotalPrice(price);
    setTotalItems(items);
    setCartCount(count);
  }, [
    cart,
    cartCount,
    setCartCount,
    totalPrice,
    totalItems,
    setTotalItems,
    setTotalPrice,
  ]);
  return (
    <>
      {checkPath ? (
        <>
          <h1>Your cart</h1>
          <p>
            You have a total of <span>₱{totalPrice.toFixed(2)}</span>
          </p>
        </>
      ) : (
        <>
          <h1>
            <Link to="/cart">View your cart</Link>
          </h1>

          <p>
            You have <span>{cartCount}</span> items in cart right now
          </p>
        </>
      )}
    </>
  );
};

export default CheckoutMessage;
