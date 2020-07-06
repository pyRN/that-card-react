import React, {useState} from 'react'

import { addNewUser } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

function RegisterComponent(){
    //Gloabal State
    const bRegistration = useSelector(state => state.oRegisteredReducer)
    
    //Local State
    const [bIsEmailValid, fnSetIsEmailValid] = useState(null)
    const [bIsPasswordValid, fnSetIsPasswordValid] = useState(null)

    const fnDispatch = useDispatch()
    
    const handleOnSubmit = (event) =>{
        event.preventDefault()
        let sUserEmail = document.getElementById("inputEmail").value
        let sPassword = document.getElementById("inputPassword").value
        
        fnDispatch(addNewUser(sUserEmail, sPassword))
    }

    const handleOnChange = (event) =>{
        event.preventDefault()

        //Validate Email
        if(event.target.name === "inputEmail"){
            let rEmailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            let sUserEmail = document.getElementById("inputEmail").value
            rEmailValidation.test(sUserEmail) ? fnSetIsEmailValid(true) : fnSetIsEmailValid(false)
        }

        //Validate Password
        if(event.target.name === "inputPassword" || event.target.name === "inputPasswordConfirm"){
            let sPassword = document.getElementById("inputPassword").value
            let sPasswordConfirm = document.getElementById("inputPasswordConfirm").value
            sPasswordConfirm === sPassword && sPassword.length >= 6 && sPasswordConfirm.length >= 6 ? fnSetIsPasswordValid(true) : fnSetIsPasswordValid(false)
        }
    }

    if(bRegistration.bRegistrationSuccessfull){
        return(
            <div align="center" className="justify-content-center mt-5">
                <form className="card form-signin border border-primary bg-dark">
                    <h1 className="h3 mb-3 font-weight-normal text-primary">Registration successful.  Please login.</h1> 
                </form>
            </div>
        )
    }

    return(
        <div align="center" className="justify-content-center mt-5">
            {bRegistration.bEmailAlreadyExists ? <h2 className="mb-1 font-weight-normal text-danger">Email already in use!</h2> : null}
            <form className="card form-signin border border-primary bg-dark">
                <h1 className="h3 mb-3 font-weight-normal text-primary">Register</h1>                
                <input type="email" id="inputEmail" aria-describedby="emailHelp" name="inputEmail" className="form-control mb-0" placeholder="Email address" onChange={handleOnChange} required autoFocus/>
                {!bIsEmailValid && bIsEmailValid !== null ? <small id="emailHelp" className="form-text text-danger mb-2">Not a valid email address</small> : null}
                <input type="password" id="inputPassword" aria-describedby="passwordHelp" name="inputPassword" className="form-control mb-0" onChange={handleOnChange} placeholder="Password (Min 6 characters)" required/>
                {!bIsPasswordValid && bIsPasswordValid !== null ? <small id="passwordHelp" className="form-text text-danger mb-2">Passwords do not match or are too short</small> : null}
                <input type="password" id="inputPasswordConfirm" name="inputPasswordConfirm" className="form-control mt-2a" onChange={handleOnChange} placeholder="Confirm Password" required/>
                {bIsEmailValid && bIsPasswordValid ? 
                    <button id="registerBtn" className="btn btn-lg btn-success btn-block mt-3" type="submit" onClick={handleOnSubmit}>Register</button>
                    :
                    <button id="registerBtn" className="btn btn-lg btn-outline-primary btn-block mt-3" type="submit" onClick={handleOnSubmit} disabled>Register</button>
                }
            </form>
        </div>
    )
}

export default RegisterComponent