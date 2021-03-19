//Reducer is used when user registers for a new account.  Sets state to notify user if email is already in use and whether registration was successfull.

import {
  SET_REGISTERED,
  VALIDATE_EMAIL,
  VALIDATE_CODE,
} from "../actions/types";

//Initial values are null, state changes when user presses "Register" button
const initialState = {
  bEmailAlreadyExists: null,
  bRegistrationSuccessfull: null,
  bIsCodeValid: null,
  bIsEmailValid: null,
  sId: null,
};

export default function checkRegistration(state = initialState, action) {
  switch (action.type) {
    case SET_REGISTERED:
      return {
        bEmailAlreadyExists: action.payload.bEmailAlreadyExists,
        bRegistrationSuccessfull: action.payload.bRegistrationSuccessfull,
        bIsCodeValid: null,
        bIsEmailValid: null,
      };
    case VALIDATE_EMAIL:
      return {
        ...state,
        bIsEmailValid: action.payload.bIsEmailValid,
        sId: action.payload.sId,
      };
    case VALIDATE_CODE:
      return {
        ...state,
        bIsCodeValid: action.payload.bIsCodeValid,
      };

    default:
      return state;
  }
}
