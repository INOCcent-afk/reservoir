import React from "react";

import { Route, Switch, useHistory } from "react-router";

import AppScreen from "./screens/AppSreen";
import LogIn from "./screens/LogIn";

import MobileNavigation from "./containers/MobileNavigation";

import firebase from "./config/firebase-config";
import Header from "./containers/Header";
import Search from "./screens/Search";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";

import "./assets/styles/Utils.css";
import {
  AppContainer,
  BodyInner,
  GlobalStyle,
} from "./assets/styles/GlobalStyle";

const App = () => {
  const history = useHistory();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 800);
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
      <AppContainer>
        <GlobalStyle />
        <Header />
        {show && (
          <BodyInner>
            <Switch>
              <Route path="/" exact component={LogIn} />
              <Route path="/app" exact component={AppScreen} />
              <Route path="/search" exact component={Search} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/profile" exact component={Profile} />
            </Switch>
          </BodyInner>
        )}
        <MobileNavigation />
      </AppContainer>
    </>
  );
};

export default App;
