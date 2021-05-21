import React, { FC } from "react";
import ProfileCard from "../../components/ProfileCard";
import PostContainer from "../PostContainer";

const RightContainer: FC = () => {
  return (
    <div className="none-sm block-lg">
      <ProfileCard />
      <PostContainer />
    </div>
  );
};

export default RightContainer;
