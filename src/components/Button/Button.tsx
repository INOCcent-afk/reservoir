import React, { FC, ReactNode } from "react";

import { ButtonContainer } from "./Button.styles";

type Props = {
  icon?: ReactNode;
  text: string;
};

const Button: FC<Props> = ({ icon, text }: Props) => {
  return (
    <>
      <ButtonContainer>
        {icon}
        <p>{text}</p>
      </ButtonContainer>
    </>
  );
};

export default Button;
