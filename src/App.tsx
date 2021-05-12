import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

import { githubProvider, googleProvider } from "./config/authMethod";
import socialMediaAuth, { auth } from "./service/auth";

function App() {
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [pPic, setPPic] = useState("");

  const handleOnClick = async (provider: any) => {
    const response = await socialMediaAuth(provider);

    console.log(response);

    setPPic(`${response.photoURL}?access_token=`);
    setName(response.displayName);

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
        <>
          <h1 onClick={logOut}>logout</h1>
          <h1>{name}</h1>
          <img src={pPic} alt="" />
          <Pagination count={5}></Pagination>
        </>
      ) : (
        <>
          <button onClick={() => handleOnClick(githubProvider)}>github</button>
          <button onClick={() => handleOnClick(googleProvider)}>google</button>
        </>
      )}
    </>
  );
}

export default App;
