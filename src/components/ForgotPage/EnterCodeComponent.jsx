/*
 * TODO:
 */

//Changelog: Component refactored on 3/18/21

import React, { useState } from "react";
import { fnCheckValidCode } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function EnterCodeComponent() {
  //Gloabal State
  const sId = useSelector((state) => state.oRegisteredReducer.sId);

  //Local State
  const [bRequiredField, fnSetRequiredField] = useState(false);

  const fnDispatch = useDispatch();

  const fnOnInputChange = (event) => {
    let sVerificationCode = document.getElementById("code-input").value;
    sVerificationCode.length === 6
      ? fnSetRequiredField(true)
      : fnSetRequiredField(false);
  };

  const fnOnVerifyCode = (event) => {
    event.preventDefault();
    fnDispatch(
      fnCheckValidCode(document.getElementById("code-input").value),
      sId
    );
  };

  return (
    <div align="center" className="justify-content-center mt-5">
      <h2 className="text-primary mb-4">
        A code has been emailed to you, please enter code
      </h2>
      <form className="form-signin border border-primary bg-dark rounded">
        <input
          autoFocus
          className="form-control mb-1"
          id="code-input"
          onChange={fnOnInputChange}
          placeholder="Verification Code"
          required
          type="text"
        />
        {bRequiredField ? (
          <button
            className="btn btn-lg btn-success btn-block mt-3"
            onClick={fnOnVerifyCode}
            type="submit"
          >
            Verify Code
          </button>
        ) : (
          <button
            className="btn btn-lg btn-outline-primary btn-block mt-3"
            disabled
            onClick={fnOnVerifyCode}
            type="submit"
          >
            Verify Code
          </button>
        )}
      </form>
    </div>
  );
}
