import React, { FC, ReactNode } from "react";

import { BoxContainer } from "./Box.style";

type Props = {
  children: ReactNode;
};

const Box: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <BoxContainer>{children}</BoxContainer>
    </>
  );
};

export default Box;
