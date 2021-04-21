import { SIGN_IN_USER, SIGN_OUT_USER } from "../actions/types";

const initialState = {
  bIsLoading: false,
  bIsSignedIn: false,
  oCollection: {},
  sId: null,
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        bIsLoading: action.payload.bIsLoading,
        bIsSignedIn: action.payload.bIsSignedIn,
        oCollection: action.payload.oCollection,
        sId: action.payload.sId,
      };
    case SIGN_OUT_USER:
      return {
        bIsLoading: false,
        bIsSignedIn: false,
        oCollection: {},
        sId: null,
      };
    default:
      return state;
  }
}
