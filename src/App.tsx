import React, { useEffect, useState } from "react";

import { githubProvider, googleProvider } from "./config/authMethod";
import socialMediaAuth, { auth } from "./utils/auth";
import { Route, Switch, useHistory } from "react-router";

import AppScreen from "./screens/AppSreen";
import LogIn from "./screens/LogIn";

import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import { BodyInner, GlobalStyle } from "./assets/styles/GlobalStyle";
import { Colors } from "./assets/styles/Colors";
import MobileNavigation from "./containers/MobileNavigation";

import firebase from "./config/firebase-config";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .MuiPaginationItem-root": {
        color: Colors.bodyFontColor,
        fontSize: "1.2rem",
      },
      "& .MuiPaginationItem-root:hover": {
        backgroundColor: Colors.secondaryFontColor,
      },
      "& .Mui-selected": {
        backgroundColor: Colors.secondaryFontColor,
      },
    },
  })
);

const App = () => {
  const history = useHistory();
  const classes = useStyles();

  const [name, setName] = useState("");
  const [pPic, setPPic] = useState("");
  const [currentUser, setCurrentUser] =
    React.useState<firebase.User | null | boolean>(null);

  const handleOnClick = async (provider: any) => {
    const response = await socialMediaAuth(provider);

    setPPic(response?.photoURL!);
    setName(response?.displayName!);

    history.push("/app");
  };

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("logout");
      })
      .catch((err) => {
        console.log(err.message);
      });
    history.push("/");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPPic(user?.photoURL!);
      setName(user?.displayName!);
    });

    if (currentUser === true) {
      history.push("/app");
    }
    if (currentUser === false) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <BodyInner>
        {currentUser ? (
          <>
            <h1 onClick={logOut}>logout</h1>
            <h1>{name}</h1>
            <img src={pPic} alt="" />
          </>
        ) : (
          <>
            <button onClick={() => handleOnClick(githubProvider)}>
              github
            </button>
            <button onClick={() => handleOnClick(googleProvider)}>
              google
            </button>
          </>
        )}
        {/* <div className={classes.root}>
          <Pagination count={5} color="primary"></Pagination>
        </div> */}
        <Switch>
          <Route path="/app" exact component={AppScreen} />
          <Route path="/" exact component={LogIn} />
        </Switch>
      </BodyInner>
      <MobileNavigation />
    </>
  );
};

export default App;
