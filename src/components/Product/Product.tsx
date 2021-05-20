import React, { FC } from "react";
import styled from "styled-components";
import Box from "../../containers/Box";
import Button from "../Button";

type Props = {
  image: string;
  description: string;
  price: number;
  id: number;
  category: string;
  title: string;
};

const Product: FC<Props> = ({
  image,
  description,
  price,
  id,
  category,
  title,
}: Props) => {
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
        <ProductDescription>{description}</ProductDescription>
        <Button text="ADD TO CART" />
      </Box>
    </>
  );
};

export default Product;

export const ProductHeader = styled.div``;
export const ProductImage = styled.div`
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 100%;

  img {
    width: 100%;
  }
`;
export const ProductInfo = styled.div``;
export const ProductTitle = styled.div``;
export const ProductPrice = styled.div``;
export const ProductDescription = styled.div``;
