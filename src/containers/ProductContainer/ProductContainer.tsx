import React, { FC } from "react";

import Loading from "../../components/Loading";
import Product from "../../components/Product";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchProducts } from "../../redux/Shop.slice";

import { Wrapper, Container } from "./ProductContainer.styles";

const ProductContainer: FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useAppSelector((state) => state.cart.products);
  const status = useAppSelector((state) => state.cart.status);

  console.log(status);

  return (
    <>
      <Container>
        {status === "loading" ? (
          <Loading />
        ) : (
          <Wrapper>
            {products.map((product) => (
              <Product
                title={product.title}
                id={product.id}
                key={product.id}
                price={product.price}
                description={product.description}
                image={product.image}
                category={product.category}
              />
            ))}
          </Wrapper>
        )}
      </Container>
    </>
  );
};

export default ProductContainer;
