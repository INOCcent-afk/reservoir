import React, { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { searchItem } from "../../redux/Shop.slice";

import { Input } from "./Search.styles";

const SearchInput: FC = () => {
  const dispatch = useAppDispatch();

  const search = useAppSelector((state) => state.cart.search);

  // products
  //   .filter((val) => {
  //     if (value === "") {
  //       return val;
  //     } else if (
  //       val.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  //     ) {
  //       return val;
  //     }
  //   })
  //   .map((item) => {
  //     return item;
  //   });

  console.log(search);

  return (
    <>
      <Input
        type="text"
        onChange={(e) => dispatch(searchItem(e.target.value))}
        value={search}
        placeholder="Search"
      />
    </>
  );
};

export default SearchInput;
