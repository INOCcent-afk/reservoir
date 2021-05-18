import React, { FC } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Icon from "../../components/Icon";
import SearchInput from "../../components/SearchInput/SearchInput";

const Search: FC = () => {
  const history = useHistory();

  return (
    <>
      <SearchPageContainer>
        <SearchPageTitle>
          <div onClick={() => history.goBack()}>
            <Icon icon="rightarrow" />
          </div>
          <SearchInput />
        </SearchPageTitle>
      </SearchPageContainer>
    </>
  );
};

export default Search;

export const SearchPageContainer = styled.div``;

export const SearchPageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;

  svg {
    width: 25px;
    height: 25px;
    fill: none;
  }
`;
