import React, { FC } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loading from "../../components/Loading";
import Box from "../../containers/Box";
import { useAppDispatch } from "../../redux/hook";
import { fetchProducts } from "../../redux/Shop.slice";

const AppScreen: FC = () => {
  const [show, setShow] = React.useState(false);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 800);
  }, []);

  return (
    <>
      {!show ? (
        <Loading />
      ) : (
        <>
          <Box>
            <h1>HELLO WORLD</h1>
          </Box>
          <Box>
            <h1>HELLO WORLD</h1>
          </Box>
          <Box>
            <h1>HELLO WORLD</h1>
          </Box>
        </>
      )}
    </>
  );
};

export default AppScreen;

// onClick={() => dispatch(fetchProducts())}
