import React, { FC } from "react";

import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/Shop.slice";

import Box from "../../containers/Box";
import Button from "../Button";

import styled from "styled-components";

type Props = {
  image: string;

  price: number;
  id: number;
  category: string;
  title: string;
};

const Product: FC<Props> = ({ image, price, id, category, title }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Box>
        <ProductHeader>
          <ProductImage>
            <img src={image} alt={`${title}=${id}`} />
          </ProductImage>
          <ProductInfo>
            <ProductTitle>
              <p>{title}</p>
              <p>{category}</p>
            </ProductTitle>
            <ProductPrice>
              <p>${price}</p>
            </ProductPrice>
          </ProductInfo>
        </ProductHeader>
        <div onClick={() => dispatch(addToCart(id))}>
          <Button type="productBTN" text="ADD TO CART" />
        </div>
      </Box>
    </>
  );
};

export default Product;

export const ProductHeader = styled.div`
  display: flex;
  margin: 10px 0 20px 0;
`;
export const ProductImage = styled.div`
  overflow: hidden;
  min-width: 100px;
  width: 100px;
  height: 100px;
  border-radius: 100%;

  img {
    width: 100%;
  }
`;
export const ProductInfo = styled.div`
  margin-left: 20px;

  p {
    margin-bottom: 10px;
  }
`;
export const ProductTitle = styled.div``;
export const ProductPrice = styled.div``;
