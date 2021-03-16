import { GET_CURRENT_USER, SET_REGISTERED, LOGOUT } from "./types";
import axios from "axios";

export const updateCollection = (sEmailAddress, oStagedAmts) => (dispatch) => {
  axios
    .put(`/api/users/:sEmailAddress`, {
      sEmailAddress: "jacobmayeux@gmail.com", //sEmailAddress,
      oStagedAmts: oStagedAmts,
    })
    .catch((err) => {
      console.log("Error Saving Collection");
    });
};

//Function call for logging user in
export const fnSignIn = (sEmailEntered, sPasswordEntered) => (dispatch) => {
  //Post request to `/api/users/:sEmailedEnter` (routes/api/users.js) and send data for sEmailedEntered and sPasswordEntered
  axios
    .post(`/api/users/:sEmailEntered`, {
      sEmailEntered: sEmailEntered,
      sPasswordEntered: sPasswordEntered,
    })
    .then((results) => {
      //Send information from DB about user to reducer to load collection information into the app
      dispatch({
        type: GET_CURRENT_USER,
        payload: {
          sEmailAddress: results.data.sEmailAddress,
          bIsLoggedIn: true,
          bIsLoading: true,
          oCollection: results.data.oCollection,
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

//Function call for registering a user
export const addNewUser = (sEmailAddress, sPassword) => (dispatch) => {
  axios
    .post(`/api/users/`, {
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

//Function for logging user out
export const fnSignOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
