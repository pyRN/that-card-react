import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../actions'
import { useDispatch } from 'react-redux'

function LoginComponent(){
    const [bRequiredFields, setRequiredFields] = useState(false)
    const fnDispatch = useDispatch()

    const handleOnSubmit = (event) =>{
        event.preventDefault()
        let sUserEmail = document.getElementById("inputEmail").value
        let sPassword = document.getElementById("inputPassword").value

        // fnDispatch(getCurrentUser(sUserEmail))
    }

    const handleOnChange = (event) =>{
        event.preventDefault()
        let sUserEmail = document.getElementById("inputEmail").value
        let sPassword = document.getElementById("inputPassword").value

        if(sUserEmail && sPassword){
            setRequiredFields(true)
        }   
    }

    return (
        <div align="center" className="justify-content-center mt-5">
            <form className="form-signin border border-primary bg-dark rounded">
                <h1 className="h3 mb-3 font-weight-normal text-primary">Please sign in</h1>
                <input type="email" id="inputEmail" aria-describedby="emailHelp" name="inputEmail" onChange={handleOnChange} className="form-control mb-1" placeholder="Email address" required autoFocus/>
                <input type="password" id="inputPassword" aria-describedby="passwordHelp" name="inputPassword" onChange={handleOnChange} className="form-control mb-0"placeholder="Password" required/>
                {bRequiredFields ? 
                    <button id="registerBtn" className="btn btn-lg btn-success btn-block mt-3" type="submit" onClick={handleOnSubmit}>Login</button>
                    :
                    <button id="registerBtn" className="btn btn-lg btn-outline-primary btn-block mt-3" type="submit" onClick={handleOnSubmit} disabled>Login</button>
                }
                <div className="row justify-content-center">
                    <Link className="nav-link text-primary" to="/forgotPass">Forgot Password</Link>
                    <Link className="nav-link text-primary" to="register/">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent