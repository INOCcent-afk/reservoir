import React, { FC, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import Icon from "../../components/Icon";
import firebase from "../../config/firebase-config";

import {
  HeaderContainer,
  MobileHeader,
  ProfilePictureContainer,
} from "./Header.styles";

const Header: FC = () => {
  const history = useHistory();
  const [profilePicture, setProfilePicture] = React.useState("");
  const [show, setShow] = React.useState(false);

  history.listen(() => {
    window.location.pathname.includes("/app") ? setShow(true) : setShow(false);
  });

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("logout");
      })
      .catch((err) => {
        console.log(err.message);
      });
    history.push("/");
  };

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setProfilePicture(user?.photoURL!);
    });
  }, []);

  return (
    <>
      {show && (
        <HeaderContainer>
          <MobileHeader>
            <ProfilePictureContainer onClick={logOut}>
              <div className="image-container">
                <img src={profilePicture} alt="user_picture" />
              </div>
              <div className="circle"></div>
            </ProfilePictureContainer>
            <Link to="/search">
              <Icon icon="search" />
            </Link>
          </MobileHeader>
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;
