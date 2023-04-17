import auth from "../../firebase";
import firebase from "firebase/compat/app"; //modification in import path from firebase /compat is added
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../ActionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl") // received from you-tube-API --> guide -->installed APP --> 3rd url

    const res = await auth.signInWithPopup(provider);
    // console.log(res);

    const accessToken = res.credential.accessToken;

    const profile = {
      name: res.additionalUserInfo.profile.name,
      photo: res.additionalUserInfo.profile.picture,
    };
    // console.log(profile);

    //to maintain the credentialHistory of user session store added so that 
    //accessToken is mentained even after refreshing the page
    sessionStorage.setItem("U-tube-access-token", accessToken);
    sessionStorage.setItem("U-tube-user", JSON.stringify(profile));

    // credentials is strored in session storage because the accessToken is valid only for 16 mins thus whenever 
    //we close window the token kye get vanished from session storage so that
    // user can login again which will avoid the 404 gate way error due to expiry of accessToken

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};


//log-out functionality

export const log_out = ()=> async dispatch=>{
    await auth.signOut();

    dispatch({
        type: LOG_OUT,
    })

    sessionStorage.removeItem('U-tube-access-token');
    sessionStorage.removeItem('U-tube-user')
}