/*
 * TODO:
 */

//Changelog: Component refactored on 3/17/21

import React, { useState } from "react";
import { fnRegisterUser } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function RegisterComponent() {
  //Gloabal State
  const bRegistration = useSelector((state) => state.oRegisteredReducer);

  //Local State
  const [bIsEmailValid, fnSetIsEmailValid] = useState(null);
  const [bIsPasswordValid, fnSetIsPasswordValid] = useState(null);

  const fnDispatch = useDispatch();

  const fnOnRegister = (event) => {
    event.preventDefault();

    fnDispatch(
      fnRegisterUser(
        document.getElementById("email-input").value,
        document.getElementById("password-input").value
      )
    );
  };

  const fnOnInputChange = (event) => {
    event.preventDefault();

    //Validate Email
    if (event.target.id === "email-input") {
      let rEmailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      rEmailValidation.test(document.getElementById("email-input").value)
        ? fnSetIsEmailValid(true)
        : fnSetIsEmailValid(false);
    }

    //Validate Password
    if (
      event.target.id === "password-input" ||
      event.target.id === "password-confirm-input"
    ) {
      let sPassword = document.getElementById("password-input").value;
      let sPasswordConfirm = document.getElementById("password-confirm-input")
        .value;
      sPasswordConfirm === sPassword &&
      sPassword.length >= 6 &&
      sPasswordConfirm.length >= 6
        ? fnSetIsPasswordValid(true)
        : fnSetIsPasswordValid(false);
    }
  };

  if (bRegistration.bRegistrationSuccessfull) {
    return (
      <div align="center" className="justify-content-center mt-5">
        <form className="card form-signin border border-primary bg-dark">
          <h1 className="h3 mb-3 font-weight-normal text-primary">
            Registration successful. Please login.
          </h1>
        </form>
      </div>
    );
  }

  return (
    <div align="center " className="justify-content-center mt-5">
      {bRegistration.bEmailAlreadyExists ? (
        <h2 className="mb-1 font-weight-normal text-danger">
          Email already in use!
        </h2>
      ) : null}
      <form className="card form-signin border border-primary bg-dark rounded">
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
        {!bIsEmailValid && bIsEmailValid !== null ? (
          <small className="form-text text-danger mb-2" id="emailHelp">
            Not a valid email address
          </small>
        ) : null}
        <input
          aria-describedby="password-help"
          className="form-control mb-1"
          id="password-input"
          onChange={fnOnInputChange}
          placeholder="Password (Min 6 characters)"
          required
          type="password"
        />
        {!bIsPasswordValid && bIsPasswordValid !== null ? (
          <small className="form-text text-danger mb-2" id="password-help">
            Passwords do not match or are too short
          </small>
        ) : null}
        <input
          className="form-control mt-2a"
          id="password-confirm-input"
          onChange={fnOnInputChange}
          placeholder="Confirm Password"
          required
          type="password"
        />
        {bIsEmailValid && bIsPasswordValid ? (
          <button
            className="btn btn-lg btn-success btn-block mt-3"
            id="register-button"
            onClick={fnOnRegister}
            type="submit"
          >
            Register
          </button>
        ) : (
          <button
            className="btn btn-lg btn-outline-primary btn-block mt-3"
            disabled
            id="register-button"
            onClick={fnOnRegister}
            type="submit"
          >
            Register
          </button>
        )}
      </form>
    </div>
  );
}
