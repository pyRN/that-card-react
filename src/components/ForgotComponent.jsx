import React from 'react'

function ForgotComponent(){
    const handleOnSubmit = () =>{
        console.log("Forgot")
    }

    return(
        <div align="center" className="justify-content-center mt-5">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal text-primary">Forgot Password</h1>
                <p className="mb-3 font-weight-normal text-primary">Please enter email address</p>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleOnSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default ForgotComponent