import React, { FC } from "react";
import { useHistory } from "react-router";

import Icon from "../../components/Icon";
import SearchInput from "../../components/SearchInput/SearchInput";
import ProductContainer from "../../containers/ProductContainer";

import { SearchPageTitle } from "./Search.styles";

const Search: FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const history = useHistory();

  React.useEffect(() => {
    if (width >= 758) {
      history.push("/app");
    }
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, history]);

  return (
    <>
      <SearchPageTitle>
        <div onClick={() => history.goBack()}>
          <Icon icon="rightarrow" />
        </div>
        <SearchInput />
      </SearchPageTitle>
      <ProductContainer />
    </>
  );
};

export default Search;
