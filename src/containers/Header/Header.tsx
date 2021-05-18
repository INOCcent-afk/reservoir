import React, { FC } from "react";
import { useHistory } from "react-router";

import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";
import Icon from "../../components/Icon";

import firebase from "../../config/firebase-config";

const Header: FC = () => {
  const [profilePicture, setProfilePicture] = React.useState("");
  const [show, setShow] = React.useState(false);

  const history = useHistory();

  history.listen(() => {
    window.location.pathname.includes("/app") ? setShow(true) : setShow(false);
  });

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setProfilePicture(user?.photoURL!);
    });
  }, [show]);

  return (
    <>
      {show && (
        <HeaderContainer>
          <MobileHeader>
            <ProfilePictureContainer>
              <div className="image-container">
                <img src={profilePicture} alt="user_picture" />
              </div>
              <div className="circle"></div>
            </ProfilePictureContainer>
            <Icon icon="search" />
          </MobileHeader>
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;

export const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  padding: 20px 20px;
`;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePictureContainer = styled.div`
  position: relative;

  img {
    width: 30px;
  }
  .circle {
    position: absolute;
    z-index: 20;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    bottom: 0;
    right: 0;
    background: ${Colors.secondaryFontColor};
  }

  .image-container {
    overflow: hidden;
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;
