import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CartItem from "../../components/CartItem";
import CheckoutMessage from "../../components/CheckoutMessage";
import Icon from "../../components/Icon";

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
          {cartItems.length ? (
            <>
              <div className="checkoutmessage block-sm none-lg">
                <CheckoutMessage />
              </div>
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
            </>
          ) : (
            <CartMessage>
              <Icon icon="bigcart" />
              <p>Your Cart is Currently Empty</p>
              <Link to="/app">
                <p>
                  <span>SHOW NOW!</span>
                </p>
              </Link>
            </CartMessage>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default CartContainer;

export const CartMessage = styled.div`
  height: calc(85vh - 30px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  svg {
    width: 100px;
    height: 100px;
  }

  p {
    margin: 5px 0;
  }
  text-align: center;
`;
