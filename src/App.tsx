import React, { useState } from "react";

// import { githubProvider, googleProvider } from "./config/authMethod";
// import socialMediaAuth, { auth } from "./utils/auth";
import { Route, Switch } from "react-router";

import AppScreen from "./screens/AppSreen";
import LogIn from "./screens/LogIn";

import { GlobalStyle } from "./assets/styles/GlobalStyle";

const App = () => {
  // const [status, setStatus] = useState(false);
  // const [name, setName] = useState("");
  // const [pPic, setPPic] = useState("");

  // const handleOnClick = async (provider: any) => {
  //   const response = await socialMediaAuth(provider);

  //   setPPic(`${response.photoURL}?access_token=`);
  //   setName(response.displayName);

  //   setStatus(true);
  // };

  // const logOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       setStatus(false);
  //       console.log("logout");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <>
      {/* {status ? (
        <>
          <h1 onClick={logOut}>logout</h1>
          <h1>{name}</h1>
          <img src={pPic} alt="" />
          
        </>
      ) : (
        <>
          <button onClick={() => handleOnClick(githubProvider)}>github</button>
          <button onClick={() => handleOnClick(googleProvider)}>google</button>
        </>
      )} */}
      <GlobalStyle />
      <Switch>
        <Route path="/app" exact component={AppScreen} />
        <Route path="/" exact component={LogIn} />
      </Switch>
    </>
  );
};

export default App;

// import Pagination from "@material-ui/lab/Pagination";
// <Pagination count={5}></Pagination>
