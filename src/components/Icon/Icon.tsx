import React, { FC } from "react";

import { ReactComponent as GoogleIcon } from "../../assets/icons/google-icon.svg";
import { ReactComponent as BugIcon } from "../../assets/icons/bug-icon.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout-icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/right-icon.svg";

type Props = {
  icon:
    | "google"
    | "bug"
    | "cart"
    | "github"
    | "home"
    | "logout"
    | "profile"
    | "search"
    | "rightarrow";
};

const Icon: FC<Props> = ({ icon }: Props) => {
  switch (icon) {
    case "google":
      return <GoogleIcon />;
    case "bug":
      return <BugIcon />;
    case "cart":
      return <CartIcon />;
    case "github":
      return <GithubIcon />;
    case "home":
      return <HomeIcon />;
    case "logout":
      return <LogoutIcon />;
    case "profile":
      return <ProfileIcon />;
    case "search":
      return <SearchIcon />;
    case "rightarrow":
      return <RightArrowIcon />;
  }
};

export default Icon;
