import React, { FC, ReactNode } from "react";

import { ButtonContainer, ProductButton } from "./Button.styles";

type Props = { icon?: ReactNode; text: string; event: () => void } & (
  | {
      type: "normalBTN";
    }
  | { type: "productBTN" }
);

const Button: FC<Props> = (props) => {
  return (
    <>
      {props.type === "normalBTN" ? (
        <ButtonContainer onClick={props.event}>
          {props.icon}
          <p>{props.text}</p>
        </ButtonContainer>
      ) : null}
      {props.type === "productBTN" ? (
        <ProductButton onClick={props.event}>
          <p> {props.text}</p>
        </ProductButton>
      ) : null}
    </>
  );
};

export default Button;
