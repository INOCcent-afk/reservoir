import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useHistory } from "react-router";

import { githubProvider, googleProvider } from "../config/authMethod";

import firebase from "../config/firebase-config";
import socialMediaAuth, { auth } from "../utils/auth";
import { AppState } from "./store";

type T = {
  currentUser?: firebase.User | null | boolean;
  profilePicture?: string | null;
  username?: string | null;
  response: any;
};

const initialState: T = {
  currentUser: null,
  profilePicture: null,
  username: null,
  response: null,
};

const handleLogin = async (provider: any) => {
  const response = await socialMediaAuth(provider);

  return response;
};

export const AuthUserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logInGithub: (state) => {
      return {
        ...state,
        response: handleLogin(githubProvider),
      };
    },
    logInGoogle: (state) => {
      return {
        ...state,
        response: handleLogin(googleProvider),
      };
    },
    logOut: (state) => {
      auth
        .signOut()
        .then(() => {
          console.log("logout");
        })
        .catch((err) => {
          console.log(err);
        });

      return {
        ...state,
      };
    },
    getUserInfo: (state) => {
      let name;
      let picture;
      let user;

      auth.onAuthStateChanged((res) => {
        name = res?.photoURL;
        picture = res?.displayName;
        user = res;
      });
      return {
        ...state,
        currentUser: user,
        profilePicture: picture,
        username: name,
      };
    },
  },
});

export const { logInGithub, logInGoogle, logOut, getUserInfo } =
  AuthUserSlice.actions;

export const selectPicture = (state: AppState) => state.User.profilePicture;

export const selectData = (state: AppState) => state.User.response;

export const selectDisplayName = (state: AppState) => state.User.username;

export const selectCurrentUser = (state: AppState) => state.User.currentUser;

export default AuthUserSlice.reducer;
