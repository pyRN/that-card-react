import  React from 'react'

function CardNavBarComponent(){
    return(
        <nav className="navbar navbar-expand-lg  navbar-dark border border-primary fixed-bottom mr-auto row" style={{backgroundColor: "black"}}>
            <h5 className="text-primary mr-3">Card Name / Set Name</h5>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                    <input type="radio" name="options" id="cardViewBtn" autocomplete="off" checked/> Card View
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="tblViewBtn" autocomplete="off"/> Table View
                </label>
            </div>
        </nav>
    )
}

export default CardNavBarComponent