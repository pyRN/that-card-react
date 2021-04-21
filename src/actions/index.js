import axios from "axios";
import {
  SET_REGISTERED,
  SIGN_IN_USER,
  SIGN_OUT_USER,
  VALIDATE_EMAIL,
  VALIDATE_CODE,
} from "./types";

//Function used to validate reset code on 'Forgot Password'
export const fnCheckValidCode = (sValidationCode, sId) => (dispatch) => {
  axios
    .post("/api/forgotPasswordAPI/validateCode", {
      sValidationCode: sValidationCode,
      sId: sId,
    })
    .then((results) => {
      dispatch({
        type: VALIDATE_CODE,
        payload: {
          bIsCodeValid: results.data.bIsCodeValid,
        },
      });
    });
};

//Function used to reset users password
export const fnResetPassword = (sId, sPasswordEntered) => (dispatch) => {
  axios
    .post(`/api/forgotPasswordAPI/resetPassword`, {
      sId: sId,
      sPasswordEntered: sPasswordEntered,
    })
    .catch((err) => {
      console.log("Error Resetting Password");
    });
};

//Function used to update users collection of cards
export const updateCollection = (sEmailAddress, oStagedAmts) => (dispatch) => {
  axios
    .put(`/api/usersCards/:sEmailAddress`, {
      sEmailAddress: "jacobmayeux@gmail.com", //sEmailAddress,
      oStagedAmts: oStagedAmts,
    })
    .catch((err) => {
      console.log("Error Saving Collection");
    });
};

//Function used to validate email on 'Forgot Password'
export const fnCheckValidEmail = (sEmailEntered) => (dispatch) => {
  //Check if email is in DB, if not send error to user, if in DB set secret code and email it to user
  axios
    .post(`/api/forgotPasswordAPI/validateEmail`, {
      sEmailEntered: sEmailEntered,
    })
    .then((results) => {
      //Send information from DB about user to reducer to load collection information into the app
      dispatch({
        type: VALIDATE_EMAIL,
        payload: {
          bIsEmailValid: results.data.bIsValidEmail,
          sId: results.data.sId,
        },
      });
    })
    .catch((error) => {
      /***TODO: Need to display to user that email/password combination is incorect***/

      console.log("This isn't working bob.", error);
      // dispatch({
      //     type: SET_REGISTERED,
      //     payload: {
      //         bEmailAlreadyExists: true,
      //         bRegistrationSuccessfull: false
      //     }
      // })
    });
};

//Function used to sign in a user
export const fnSignIn = (sEmailEntered, sPasswordEntered) => (dispatch) => {
  //Post request to `/api/users/:sEmailedEnter` (routes/api/users.js) and send data for sEmailedEntered and sPasswordEntered
  axios
    .post(`/api/users/signIn/:sEmailEntered`, {
      sEmailEntered: sEmailEntered,
      sPasswordEntered: sPasswordEntered,
    })
    .then((results) => {
      //Send information from DB about user to reducer to load collection information into the app
      dispatch({
        type: SIGN_IN_USER,
        payload: {
          bIsSignedIn: results.data.bIsSignedIn,
          bIsLoading: results.data.bIsLoading,
          oCollection: results.data.oCollection,
          sId: results.data.sId,
        },
      });
    })
    .catch((error) => {
      console.log("Error signing in to database:  ", error);
    });
};

//Function used to register a user
export const fnRegisterUser = (sEmailAddress, sPassword) => (dispatch) => {
  axios
    .post(`/api/users/register/`, {
      sEmailAddress: sEmailAddress,
      sPassword: sPassword,
    })
    .then((results) => {
      //Dispatch that registration was successful
      dispatch({
        type: SET_REGISTERED,
        payload: {
          bEmailAlreadyExists: false,
          bRegistrationSuccessfull: true,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_REGISTERED,
        payload: {
          bEmailAlreadyExists: true,
          bRegistrationSuccessfull: false,
        },
      });
    });
};

//Function used for signing out a user
export const fnSignOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT_USER,
  });
};
