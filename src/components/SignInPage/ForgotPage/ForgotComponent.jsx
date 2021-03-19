/*
 * TODO:
 */

//Changelog: Component refactored on 3/18/21

import React, { useState } from "react";
import { fnCheckValidEmail } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function ForgotComponent() {
  //Gloabal State
  const bIsEmailValid = useSelector(
    (state) => state.oRegisteredReducer.bIsEmailValid
  );

  //Local State
  const [bRequiredField, fnSetRequiredField] = useState(false);

  const fnDispatch = useDispatch();

  const fnOnInputChange = (event) => {
    let rEmailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    rEmailValidation.test(document.getElementById("email-input").value)
      ? fnSetRequiredField(true)
      : fnSetRequiredField(false);
  };

  const fnOnResetPassword = (event) => {
    event.preventDefault();
    fnDispatch(fnCheckValidEmail(document.getElementById("email-input").value));
  };

  return (
    <div align="center" className="justify-content-center mt-5">
      <h2 className="text-primary mb-4">Forgot Password?</h2>
      <form className="form-signin border border-primary bg-dark rounded">
        <input
          aria-describedby="emailHelp"
          autoFocus
          className="form-control mb-1"
          id="email-input"
          onChange={fnOnInputChange}
          placeholder="Email address"
          required
          type="email"
        />
        {bRequiredField ? (
          <button
            className="btn btn-lg btn-success btn-block mt-3"
            onClick={fnOnResetPassword}
            type="submit"
          >
            Reset Password
          </button>
        ) : (
          <button
            className="btn btn-lg btn-outline-primary btn-block mt-3"
            disabled
            onClick={fnOnResetPassword}
            type="submit"
          >
            Reset Password
          </button>
        )}
      </form>
    </div>
  );
}
