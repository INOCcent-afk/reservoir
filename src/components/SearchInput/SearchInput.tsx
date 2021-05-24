import React, { FC } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { searchItem, locationChange } from "../../redux/Shop.slice";

import { Input } from "./Search.styles";

const SearchInput: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const search = useAppSelector((state) => state.cart.search);

  history.listen(() => {
    dispatch(locationChange());
  });

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
