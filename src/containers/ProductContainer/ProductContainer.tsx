import React, { FC } from "react";

import Loading from "../../components/Loading";
import Product from "../../components/Product";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchProducts } from "../../redux/Shop.slice";

import { Wrapper, Container } from "./ProductContainer.styles";

const ProductContainer: FC = () => {
  const dispatch = useAppDispatch();

  const search = useAppSelector((state) => state.cart.search);
  const products = useAppSelector((state) => state.cart.products);
  const status = useAppSelector((state) => state.cart.status);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {status === "loading" ? (
          <Loading />
        ) : (
          <Wrapper>
            {products
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.title?.toLowerCase().includes(search.toLowerCase()) ||
                  val.category?.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
                return false;
              })
              .map((product) => (
                <Product
                  title={product.title}
                  id={product.id}
                  key={product.id}
                  price={product.price}
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
