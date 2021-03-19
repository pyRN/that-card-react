/*
 * TODO:
  1)Add error handling for all components
  2)Add error messages for user
    a)If email does not exist
    b)If verification code is wrong
    c)If verification code has expired
  3)Change verification code if user attempts to enter an expired code and email new code to user
  4)Implement send email to user with code. 
 */

//Changelog: Component refactored on 3/19/21

import React from "react";
import { useSelector } from "react-redux";

//Components
import EnterCodeComponent from "./EnterCodeComponent";
import ForgotComponent from "./ForgotComponent";
import ResetPasswordComponent from "./ResetPasswordComponent";

export default function ForgotContainer() {
  //Gloabal State
  const oRegisteredReducer = useSelector((state) => state.oRegisteredReducer);
  // const bIsEmailValid = true;
  // const bIsCodeValid = true;

  if (oRegisteredReducer.bIsEmailValid && !oRegisteredReducer.bIsCodeValid) {
    return <EnterCodeComponent />;
  }

  if (oRegisteredReducer.bIsEmailValid && oRegisteredReducer.bIsCodeValid) {
    // if (bIsEmailValid && bIsCodeValid) {
    return <ResetPasswordComponent />;
  }

  return (
    <div>
      <ForgotComponent />
    </div>
  );
}
