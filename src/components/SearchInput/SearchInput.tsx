import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

const SearchInput: FC = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Search"
      />
    </>
  );
};

export default SearchInput;

export const Input = styled.input`
  border-radius: 6px;
  padding: 15px 10px;
  border: none;
  color: ${Colors.primaryFontColor};
  width: 90%;
  background: ${Colors.primaryFontColor60};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Colors.primaryFontColor};
  }
`;
