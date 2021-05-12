import firebase from "../config/firebase-config";

export const auth = firebase.auth();

const socialMediaAuth = (provider: any) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      return err;
    });
};

export default socialMediaAuth;
