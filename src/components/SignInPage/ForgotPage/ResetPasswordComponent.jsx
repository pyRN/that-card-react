import React, { useState } from "react";
import { fnResetPassword } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function ResetPasswordComponent() {
  //Gloabal State
  const sId = "604b4a4b0f99e7341c3347c5"; //useSelector((state) => state.oRegisteredReducer.sId);

  //Local State
  const [bIsPasswordValid, fnSetIsPasswordValid] = useState(null);

  const fnDispatch = useDispatch();

  const fnOnInputChange = (event) => {
    event.preventDefault();

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

  const fnOnResetPassword = (event) => {
    event.preventDefault();

    fnDispatch(
      fnResetPassword(sId, document.getElementById("password-input").value)
    );
  };

  return (
    <div align="center " className="justify-content-center mt-5">
      <h2>Reset Password</h2>
      <form className="card form-signin border border-primary bg-dark rounded">
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
        {bIsPasswordValid ? (
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
