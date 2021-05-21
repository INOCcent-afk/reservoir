import React, { FC } from "react";

import firebase from "../../config/firebase-config";

import styled from "styled-components";
import Box from "../../containers/Box";
import { Colors } from "../../assets/styles/Colors";
import { Link } from "react-router-dom";

const ProfileCard: FC = () => {
  const [profilePicture, setProfilePicture] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [uid, setUid] = React.useState("");

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setProfilePicture(user?.photoURL!);
        setDisplayName(user?.displayName!);
        setUid(user?.uid);
      }
    });
  }, []);

  return (
    <Link to="/profile">
      <Box>
        <ProfileCardTitle>
          <ProfileCardImage>
            <img src={profilePicture} alt="user_image" />
          </ProfileCardImage>
          <ProfileCardInfo>
            <p>{displayName}</p>
            <p>@{uid.slice(0, -15)}</p>
          </ProfileCardInfo>
        </ProfileCardTitle>
      </Box>
    </Link>
  );
};

export default ProfileCard;

export const ProfileCardTitle = styled.div`
  display: flex;
  cursor: pointer;
`;
export const ProfileCardImage = styled.div`
  overflow: hidden;
  border-radius: 100%;
  width: 80px;
  height: 80px;

  img {
    width: 80px;
  }
`;
export const ProfileCardInfo = styled.div`
  padding: 10px;

  p:first-child {
    font-weight: bold;
    color: ${Colors.bodyFontColor};
  }
`;
