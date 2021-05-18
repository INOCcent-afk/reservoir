import React, { FC } from "react";

import { useHistory } from "react-router";

import firebase from "../../config/firebase-config";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loading from "../../components/Loading";

const AppScreen: FC = () => {
  const history = useHistory();
  const [show, setShow] = React.useState(false);

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("logout");
      })
      .catch((err) => {
        console.log(err.message);
      });
    history.push("/");
  };

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, [show]);

  return (
    <>
      {!show ? (
        <Loading />
      ) : (
        <div>
          <h1 onClick={logOut}>LOGOUT</h1>
        </div>
      )}
    </>
  );
};

export default AppScreen;
