import  React from 'react'

function CardNavBarComponent({fSetViewSelected, fSetCardFilter}){
    
    const handleOnSubmit = (event) =>{
        event.preventDefault()
        console.log("save btn clicked")
    }

    const handleOnChange = (event) =>{
        event.preventDefault()
        event.target.value === "All" ? fSetCardFilter(null) : fSetCardFilter(event.target.value)
    }

    return(
        <nav className="navbar navbar-expand-sm  fixed-bottom justify-content-end">
            {/* Card View Buttons */}
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-sm active btn-outline-primary btn-secondary" style={{color: "black"}}>
                    <input type="radio" name="options" id="cardViewBtn" autoComplete="off" checked onClick={() => fSetViewSelected('cardView')}/> Card View
                </label>
                <label className="btn btn-sm btn-outline-primary btn-secondary" style={{color: "black"}}>
                    <input className="text-light" type="radio" name="options" id="tblViewBtn" autoComplete="off" onClick={() => fSetViewSelected('tblView')}/> Table View
                </label>
            </div>

            {/* Card Filter Select Bar */}
            <div className="btn-group m-3">
                <select className="custom-select text-primary border border-primary" onChange={handleOnChange} style={{backgroundColor: "black"}}>
                    <optgroup label="Color">
                        <option name="All" value="All">Filter: All</option>
                        <option name="W" value="W">White</option>
                        <option name="U" value="U">Blue</option>
                        <option name="B" value="B">Black</option>
                        <option name="R" value="R">Red</option>
                        <option name="G" value="G">Green</option>
                        <option name="Colorless" value="Colorless">Colorless</option>
                    </optgroup>
                    <optgroup label="Rarity">
                        <option name="Mythic" value="Mythic">Mythic</option>
                        <option name="Rare" value="Rare">Rare</option>
                        <option name="Uncommon" value="Uncommon">Uncommon</option>
                        <option name="Common" value="Common">Common</option>
                    </optgroup>
                    <optgroup label="Price">
                        <option name="HighToLow" value="HighToLow">High to Low</option>
                        <option name="LowToHigh" value="LowToHigh">Low to High</option>
                    </optgroup>
                </select>
            </div>

            {/* Save Button */}
            <div className="btn-group">
                <button className="btn btn-sm btn-success btn-outline-success" type="submit" onClick={handleOnSubmit} style={{color: "black"}}>SAVE</button>
            </div>
            
        </nav>
    )
}

export default CardNavBarComponent