/*
 * TODO:
 */

//Changelog: Component refactored on 3/18/21

import React from "react";
import { useSelector } from "react-redux";

//Components
import EnterCodeComponent from "./EnterCodeComponent";
import ForgotComponent from "./ForgotComponent";
import ResetPasswordComponent from "./ResetPasswordComponent";

export default function ForgotContainer() {
  //Gloabal State
  const oRegisteredReducer = useSelector((state) => state.oRegisteredReducer);
  // console.log("Print", oRegisteredReducer.bIsEmailValid);

  if (oRegisteredReducer.bIsEmailValid) {
    return <EnterCodeComponent />;
  }

  if (oRegisteredReducer.bIsCodeValid) {
    return <ResetPasswordComponent />;
  }

  return (
    <div>
      <ForgotComponent />
    </div>
  );
}
