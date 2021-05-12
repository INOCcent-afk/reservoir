import React from "react";
import Pagination from "@material-ui/lab/Pagination";

import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "./config/authMethod";
import socialMediaAuth from "./service/auth";

function App() {
  const handleOnClick = async (provider: any) => {
    const response = await socialMediaAuth(provider);
    console.log(response);
  };

  return (
    <>
      <button onClick={() => handleOnClick(facebookProvider)}>facebook</button>
      <button onClick={() => handleOnClick(githubProvider)}>github</button>
      <button onClick={() => handleOnClick(googleProvider)}>google</button>
      <h1>APP</h1>
      <Pagination count={5}></Pagination>
    </>
  );
}

export default App;
