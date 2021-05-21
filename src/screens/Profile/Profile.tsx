import React from "react";
import ProfileCard from "../../components/ProfileCard";

import Loading from "../../components/Loading";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";

const Profile = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setShow(true);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!show ? (
        <Loading />
      ) : (
        <>
          <LeftContainer />
          <ProfileCard />
          <RightContainer />
        </>
      )}
    </>
  );
};

export default Profile;
