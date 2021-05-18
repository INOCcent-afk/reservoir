import React, { ChangeEvent, FC } from "react";

import { Input } from "./Search.styles";

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
