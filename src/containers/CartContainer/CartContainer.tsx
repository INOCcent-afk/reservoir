import React from "react";

import CartItem from "../../components/CartItem";

import { useAppSelector } from "../../redux/hook";

import {
  Container,
  Wrapper,
} from "../ProductContainer/ProductContainer.styles";

const CartContainer = () => {
  const cartItems = useAppSelector((state) => state.cart.cart);

  return (
    <>
      <Container>
        <Wrapper>
          {cartItems.map((item) => (
            <CartItem
              title={item.title!}
              price={item.price!}
              key={item.id!}
              id={item.id!}
              image={item.image!}
              category={item.category!}
              qty={item.qty!}
            />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default CartContainer;
