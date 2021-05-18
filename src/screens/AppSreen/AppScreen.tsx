import React, { FC } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loading from "../../components/Loading";

const AppScreen: FC = () => {
  const [show, setShow] = React.useState(false);

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
          <h1>HELLO WORLD</h1>
        </>
      )}
    </>
  );
};

export default AppScreen;
