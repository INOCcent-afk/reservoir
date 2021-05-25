import React, { FC } from "react";

import Box from "../../containers/Box";
import { useAppDispatch } from "../../redux/hook";
import { adjustQty, removeFromCart } from "../../redux/Shop.slice";
import Button from "../Button";

import {
  useStyles,
  ProductHeader,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ButtonContainer,
  Input,
} from "./CartItem.styles";

type Props = {
  image: string;
  price: number;
  id: number;
  category: string;
  title: string;
  qty: number;
};

const CartItem: FC<Props> = ({
  image,
  price,
  id,
  category,
  title,
  qty,
}: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [input, setInput] = React.useState(qty);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(parseInt(e.target.value));
    dispatch(adjustQty({ id: id, qty: parseInt(e.target.value) }));
    if (parseInt(e.target.value) === 0) {
      dispatch(removeFromCart(id));
    }
  };

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
        <ButtonContainer>
          <Input
            className={classes.root}
            id="outlined-number"
            label="Number max number 10"
            type="number"
            InputProps={{
              inputProps: {
                min: "0",
                max: "10",
                onKeyDown: (event) => {
                  event.preventDefault();
                },
              },
            }}
            variant="filled"
            onChange={onChangeHandler}
            value={input}
          />
          <Button
            type="productBTN"
            text="REMOVE ITEM"
            event={() => dispatch(removeFromCart(id))}
          />
        </ButtonContainer>
      </Box>
    </>
  );
};

export default CartItem;
