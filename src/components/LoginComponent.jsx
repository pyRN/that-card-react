/*
* TODO:
    1)Use useHistory to return to cards page if login was successful
*/
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getCurrentUser, fnLogout } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function LoginComponent() {
  const fnDispatch = useDispatch();
  const fnHistory = useHistory();

  //Gloabal State
  const bIsLoggedIn = useSelector(
    (state) => state.oCurrentUserReducer.bIsLoggedIn
  );

  //State
  const [bRequiredFields, fnSetRequiredFields] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    let sEmailEntered = document.getElementById("inputEmail").value;
    let sPasswordEntered = document.getElementById("inputPassword").value;

    fnDispatch(getCurrentUser(sEmailEntered, sPasswordEntered));
    fnHistory.push("/cards");
  };

  const handleOnChange = (event) => {
    //Check to see if both Email and Password field is valid
    event.preventDefault();
    let sUserEmail = document.getElementById("inputEmail").value;
    let sPassword = document.getElementById("inputPassword").value;

    if (sUserEmail && sPassword) {
      fnSetRequiredFields(true);
    }
  };

  const handleOnLogout = (event) => {
    fnDispatch(fnLogout());
  };

  return (
    <div align="center" className="justify-content-center mt-5">
      {bIsLoggedIn ? (
        <div className="form-signin border border-danger bg-dark rounded">
          <h1 className="h3 mb-3 font-weight-normal text-danger">
            Do you want to logout
          </h1>
          <button
            id="registerBtn"
            className="btn btn-lg btn-danger btn-block mt-3"
            type="submit"
            onClick={handleOnLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <form className="form-signin border border-primary bg-dark rounded">
          <h1 className="h3 mb-3 font-weight-normal text-primary">
            Please sign in
          </h1>
          <input
            type="email"
            id="inputEmail"
            aria-describedby="emailHelp"
            name="inputEmail"
            onChange={handleOnChange}
            className="form-control mb-1"
            placeholder="Email address"
            required
            autoFocus
          />
          <input
            type="password"
            id="inputPassword"
            aria-describedby="passwordHelp"
            name="inputPassword"
            onChange={handleOnChange}
            className="form-control mb-0"
            placeholder="Password"
            required
          />
          {bRequiredFields ? (
            <button
              id="registerBtn"
              className="btn btn-lg btn-success btn-block mt-3"
              type="submit"
              onClick={handleOnSubmit}
            >
              Login
            </button>
          ) : (
            <button
              id="registerBtn"
              className="btn btn-lg btn-outline-primary btn-block mt-3"
              type="submit"
              onClick={handleOnSubmit}
              disabled
            >
              Login
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

export default LoginComponent;
