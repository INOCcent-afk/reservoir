import React from "react";
import ProfileCard from "../../components/ProfileCard";

import Loading from "../../components/Loading";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";
import { useAppSelector } from "../../redux/hook";

const Profile = () => {
  const status = useAppSelector((state) => state.cart.status);

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <>
          <LeftContainer />
          <ProfileCard type="bigcard" />
          <RightContainer />
        </>
      )}
    </>
  );
};

export default Profile;
