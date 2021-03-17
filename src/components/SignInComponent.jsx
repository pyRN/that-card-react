/*
* TODO:
    1)Show error if login is unsuccessful
    2)Change global state variable name (bIsLoggedIn) in component and reducer
*/

//Changelog: Component refactored on 3/17/21

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { fnSignIn, fnSignOut } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function SignInComponent() {
  //Gloabal State
  const bIsSignedIn = useSelector(
    (state) => state.oCurrentUserReducer.bIsLoggedIn
  );

  //Local State
  const [bRequiredFields, fnSetRequiredFields] = useState(false);

  //Methods
  const fnDispatch = useDispatch();
  const fnHistory = useHistory();

  const fnOnInputChange = (event) => {
    event.preventDefault();

    //Check to see if both Email and Password field is filled
    if (
      document.getElementById("email-input").value &&
      document.getElementById("password-input").value
    ) {
      fnSetRequiredFields(true); //Activates submit button
    } else {
      fnSetRequiredFields(false); //Deactivates submit button
    }
  };

  const fnOnSignIn = (event) => {
    event.preventDefault();

    //If both required fields are present, submit data to  backend
    if (bRequiredFields) {
      fnDispatch(
        fnSignIn(
          document.getElementById("email-input").value,
          document.getElementById("password-input").value
        )
      );
      fnHistory.push("/cards");
    }
  };

  const fnOnSignOut = (event) => {
    fnDispatch(fnSignOut());
  };

  return (
    <div align="center" className="justify-content-center mt-5">
      {bIsSignedIn ? (
        <div className="form-signin border border-danger bg-dark rounded">
          <h1 className="h3 mb-3 font-weight-normal text-danger">
            Do you want to sign out?
          </h1>
          <button
            className="btn btn-lg btn-danger btn-block mt-3"
            id="registerBtn"
            onClick={fnOnSignOut}
            type="submit"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <form className="form-signin border border-primary bg-dark rounded">
          <input
            aria-describedby="emailHelp"
            autoFocus
            className="form-control mb-1"
            id="email-input"
            name="email-input"
            onChange={fnOnInputChange}
            placeholder="Email address"
            required
            type="email"
          />
          <input
            aria-describedby="passwordHelp"
            className="form-control mb-0"
            id="password-input"
            name="password-input"
            onChange={fnOnInputChange}
            placeholder="Password"
            required
            type="password"
          />
          {bRequiredFields ? (
            <button
              className="btn btn-lg btn-success btn-block mt-3"
              id="registerBtn"
              onClick={fnOnSignIn}
              type="submit"
            >
              Sign In
            </button>
          ) : (
            <button
              className="btn btn-lg btn-outline-primary btn-block mt-3"
              disabled
              id="registerBtn"
              onClick={fnOnSignIn}
              type="submit"
            >
              Sign In
            </button>
          )}
          <div className="row justify-content-center">
            <Link className="nav-link text-primary" to="/forgotPass">
              Forgot Password
            </Link>
            <Link className="nav-link text-primary" to="register/">
              Register
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
