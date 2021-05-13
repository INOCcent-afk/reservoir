import React, { FC } from "react";

import { ReactComponent as GoogleIcon } from "../../assets/icons/google-icon.svg";
import { ReactComponent as BugIcon } from "../../assets/icons/bug-icon.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart-icon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/icons/discord-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout-icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

const Icon: FC<{}> = () => {
  return (
    <>
      <GoogleIcon />
      <BugIcon />
      <CartIcon />
      <DiscordIcon />
      <GithubIcon />
      <HomeIcon />
      <LogoutIcon />
      <ProfileIcon />
      <SearchIcon />
    </>
  );
};

export default Icon;
