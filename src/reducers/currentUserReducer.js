import { SIGN_IN_USER, SIGN_OUT_USER } from "../actions/types";

const initialState = {
  bIsLoading: false,
  bIsSignedIn: false,
  oCollection: {},
  sEmailAddress: null,
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        bIsLoading: action.payload.bIsLoading,
        bIsSignedIn: action.payload.bIsSignedIn,
        oCollection: action.payload.oCollection,
        sEmailAddress: action.payload.sEmailAddress,
      };
    case SIGN_OUT_USER:
      return {
        bIsLoading: false,
        bIsSignedIn: false,
        oCollection: {},
        sEmailAddress: null,
      };
    default:
      return state;
  }
}
