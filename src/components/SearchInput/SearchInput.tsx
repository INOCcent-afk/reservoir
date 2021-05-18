import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

const SearchInput: FC = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input type="text" onChange={handleChange} />
    </>
  );
};

export default SearchInput;

export const Input = styled.input``;
