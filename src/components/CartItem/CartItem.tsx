import { TextField } from "@material-ui/core";
import React, { FC } from "react";

import Box from "../../containers/Box";
import { useAppDispatch } from "../../redux/hook";
import { adjustQty, removeFromCart } from "../../redux/Shop.slice";
import Button from "../Button";

import styled from "styled-components";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Colors } from "../../assets/styles/Colors";

type Props = {
  image: string;
  price: number;
  id: number;
  category: string;
  title: string;
  qty: number;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "yellow",
        color: "white",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: `${Colors.secondaryBackgroundColor}`,
          color: "white",
        },
        "&:hover fieldset": {
          borderColor: `${Colors.secondaryBackgroundColor}`,
          color: "white",
        },
        "&.Mui-focused fieldset": {
          color: "white",
        },
      },
    },
  })
);

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
        <Buttons>
          <Input
            className={classes.root}
            id="outlined-number"
            label="Number max number 10"
            type="number"
            InputProps={{
              inputProps: {
                min: "0",
                max: "10",
                step: "1",
                onKeyDown: (event) => {
                  event.preventDefault();
                },
              },
            }}
            variant="filled"
            onChange={onChangeHandler}
            value={input}
          />
          <div onClick={() => dispatch(removeFromCart(id))}>
            <Button type="productBTN" text="REMOVE ITEM" />
          </div>
        </Buttons>
      </Box>
    </>
  );
};

export default CartItem;

const Input = styled(TextField)`
  color: ${Colors.bodyFontColor} !important;
  width: 100%;

  label {
    color: ${Colors.bodyFontColor} !important;
    font-size: 14px;
  }

  input {
    color: ${Colors.bodyFontColor} !important;
    font-size: 16px;

    &::-webkit-inner-spin-button {
      padding: 10px;
      background: #000;
      opacity: 1;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

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
