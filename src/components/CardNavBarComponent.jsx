import  React from 'react'

function CardNavBarComponent(){
    const handleOnClick = () =>{

    }

    return(
        <nav className="navbar navbar-expand-lg  fixed-bottom justify-content-end">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                    <input type="radio" name="options" id="cardViewBtn" autoComplete="off" checked onChange={handleOnClick}/> Card View
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="tblViewBtn" autoComplete="off" onChange={handleOnClick}/> Table View
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="tblViewBtn" autoComplete="off" onChange={handleOnClick}/> Checklist
                </label>
            </div>
        </nav>
    )
}

export default CardNavBarComponent