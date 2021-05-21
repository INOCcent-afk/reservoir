import React, { FC } from "react";
import styled from "styled-components";
import ProfileCard from "../../components/ProfileCard";
import PostContainer from "../PostContainer";

const RightContainer: FC = () => {
  return (
    <Container className="none-sm block-lg">
      <ProfileCard type="smallcard" />
      <PostContainer />
    </Container>
  );
};

export default RightContainer;

export const Container = styled.div``;
