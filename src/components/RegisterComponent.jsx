import React from 'react'

function RegisterComponent(){
    const handleOnSubmit = () =>{
        console.log("Register")
    }

    return(
        <div align="center" className="justify-content-center mt-5">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal text-primary">Register</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <input type="password" id="inputPasswordConfirm" className="form-control" placeholder="Confirm Password" required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleOnSubmit}>Register</button>
            </form>
        </div>
    )
}

export default RegisterComponent