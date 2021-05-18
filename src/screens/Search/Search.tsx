import React, { FC } from "react";
import { useHistory } from "react-router";
import SearchInput from "../../components/SearchInput/SearchInput";

const Search: FC = () => {
  const history = useHistory();

  return (
    <>
      <SearchPageContainer>
        <SearchInput />
        <h1
          onClick={() => {
            history.goBack();
          }}
        >
          BACK
        </h1>
        <h1>POTANGIONA MOOOOOOOOOO</h1>
      </SearchPageContainer>
    </>
  );
};

export default Search;
