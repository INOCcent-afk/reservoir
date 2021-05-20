import React, { FC } from "react";

import { Link, useHistory } from "react-router-dom";
import Icon from "../../components/Icon";
import LogoBranding from "../../components/LogoBranding";
import SearchInput from "../../components/SearchInput/SearchInput";
import firebase from "../../config/firebase-config";

import {
  HeaderContainer,
  MobileHeader,
  ProfilePictureContainer,
  DesktopHeader,
} from "./Header.styles";

const Header: FC = () => {
  const history = useHistory();
  const [profilePicture, setProfilePicture] = React.useState("");
  const [show, setShow] = React.useState(false);

  const check = (path: string) => {
    const matches = window.location.pathname.includes(path);

    return matches;
  };

  history.listen(() => {
    check("/app") || check("/cart") || check("/profile")
      ? setShow(true)
      : setShow(false);
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

  // React.useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     setProfilePicture(user?.photoURL!);
  //     console.log(user?.photoURL);
  //   });
  // }, []);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setProfilePicture(user?.photoURL!);
      console.log(user?.photoURL);
    }
  });

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
          <DesktopHeader>
            <LogoBranding />
            <SearchInput />
            <ProfilePictureContainer onClick={logOut}>
              <div className="image-container">
                <img src={profilePicture} alt="user_picture" />
              </div>
              <div className="circle"></div>
            </ProfilePictureContainer>
          </DesktopHeader>
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;
