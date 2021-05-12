import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "./config/authMethod";
import socialMediaAuth, { auth } from "./service/auth";

function App() {
  const [status, setStatus] = useState(false);

  const handleOnClick = async (provider: any) => {
    const response = await socialMediaAuth(provider);

    console.log(response);
    setStatus(true);
  };

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        setStatus(false);
        console.log("logout");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("hello");
  };

  return (
    <>
      {status ? (
        <h1 onClick={logOut}>logout</h1>
      ) : (
        <>
          <button onClick={() => handleOnClick(facebookProvider)}>
            facebook
          </button>
          <button onClick={() => handleOnClick(githubProvider)}>github</button>
          <button onClick={() => handleOnClick(googleProvider)}>google</button>
        </>
      )}

      <h1>APP</h1>
      <Pagination count={5}></Pagination>
    </>
  );
}

export default App;
