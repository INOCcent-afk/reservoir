import React from "react";

import { Route, Switch, useHistory } from "react-router";

import AppScreen from "./screens/AppSreen";
import LogIn from "./screens/LogIn";

import { BodyInner, GlobalStyle } from "./assets/styles/GlobalStyle";

import MobileNavigation from "./containers/MobileNavigation";

import firebase from "./config/firebase-config";
import Header from "./containers/Header";
import Search from "./screens/Search";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";

import "./assets/styles/Utils.css";

const App = () => {
  const history = useHistory();

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        history.push("/app");
      }
      if (user === null) {
        history.push("/");
      }
    });
  }, [history]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <BodyInner>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/app" exact component={AppScreen} />
          <Route path="/search" exact component={Search} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </BodyInner>
      <MobileNavigation />
    </>
  );
};

export default App;

// import socialMediaAuth from "./utils/auth";
// import Pagination from "@material-ui/lab/Pagination";
// import { makeStyles, createStyles } from "@material-ui/core/styles";
// import { Colors } from "./assets/styles/Colors";

// const useStyles = makeStyles(() =>
//   createStyles({
//     root: {
//       "& .MuiPaginationItem-root": {
//         color: Colors.bodyFontColor,
//         fontSize: "1.2rem",
//       },
//       "& .MuiPaginationItem-root:hover": {
//         backgroundColor: Colors.secondaryFontColor,
//       },
//       "& .Mui-selected": {
//         backgroundColor: Colors.secondaryFontColor,
//       },
//     },
//   })
// );

{
  /* <div className={classes.root}>
          <Pagination count={5} color="primary"></Pagination>
        </div> */
}

// useStyles();
