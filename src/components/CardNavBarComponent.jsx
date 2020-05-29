import  React from 'react'

import FilterNavBarComponent from './FilterNavBarComponent'

function CardNavBarComponent({setViewSelected, setCardFilter}){
    
    const handleSave = (e) =>{
        console.log("save btn clicked")
    }

    return(
        <nav className="navbar navbar-expand-lg  fixed-bottom justify-content-end">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-sm active btn-outline-primary btn-secondary" style={{color: "black"}}>
                    <input type="radio" name="options" id="cardViewBtn" autoComplete="off" checked onClick={() => setViewSelected('cardView')}/> Card View
                </label>
                <label className="btn btn-sm btn-outline-primary btn-secondary" style={{color: "black"}}>
                    <input className="text-light" type="radio" name="options" id="tblViewBtn" autoComplete="off" onClick={() => setViewSelected('tblView')}/> Table View
                </label>
            </div>
            <div className="btn-group">
                <FilterNavBarComponent setCardFilter={setCardFilter}/>
            </div>
            <div className="btn-group">
                <button className="btn btn-sm btn-outline-success bg-dark m-3" type="submit" onClick={handleSave}>SAVE</button>
            </div>
            
        </nav>
    )
}

export default CardNavBarComponent