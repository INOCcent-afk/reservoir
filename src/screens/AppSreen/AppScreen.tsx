import React from "react";

import { useHistory } from "react-router";

import firebase from "../../config/firebase-config";

const AppScreen = () => {
  const history = useHistory();

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

  return (
    <div>
      <h1 onClick={logOut}>LOGOUT</h1>
    </div>
  );
};

export default AppScreen;
