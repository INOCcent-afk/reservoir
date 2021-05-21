import React, { FC } from "react";

import firebase from "../../config/firebase-config";

import Box from "../../containers/Box";

import { Link } from "react-router-dom";
import {
  BigCardImage,
  BigCardInfo,
  ProfileCardImage,
  ProfileCardInfo,
  ProfileCardTitle,
} from "./ProfileCard.styles";
import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

type Props =
  | {
      type: "smallcard";
    }
  | { type: "bigcard" };

const ProfileCard: FC<Props> = (props) => {
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
    <>
      {props.type === "smallcard" ? (
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
      ) : null}
      {props.type === "bigcard" ? (
        <BigCard>
          <CoverPhoto>
            <img src={profilePicture} alt="cover_photo" />
          </CoverPhoto>
          <BigCardContent>
            <BigCardImage>
              <img src={profilePicture} alt="user_image" />
            </BigCardImage>
            <BigCardInfo>
              <p>{displayName}</p>
              <p>@{uid.slice(0, -15)}</p>
            </BigCardInfo>
          </BigCardContent>
        </BigCard>
      ) : null}
    </>
  );
};

export default ProfileCard;

export const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  background: ${Colors.primaryBackgroundColor};
`;
export const CoverPhoto = styled.div`
  height: 150px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const BigCardContent = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
`;
