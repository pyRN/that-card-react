import React from 'react'
import { Link } from 'react-router-dom';

function LoginComponent({setIsUserLogin}){
    console.log("TESTING: LoginComponent Render")

    const handleOnSubmit = () =>{
        setIsUserLogin(true)
    }

    const handleForgtPass = () =>{
        console.log("Forgot password button pressed")
    }

    const handleRegister = () =>{
        console.log("Register button pressed")
    }

    return (
        <div align="center" className="justify-content-center mt-5">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal text-primary">Please sign in</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleOnSubmit}>Sign in</button>
                <div className="row justify-content-center">
                    <Link className="nav-link text-primary" to="/forgotPass">Forgot Password</Link>
                    <Link className="nav-link text-primary" to="register/">Register</Link>
                </div>
                
            </form>
            
        </div>
        )
}

export default LoginComponent