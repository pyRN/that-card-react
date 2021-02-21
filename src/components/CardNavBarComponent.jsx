import  React from 'react'
// import { updateUserCollection } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

function CardNavBarComponent({fSetViewSelected, fSetCardFilter}){
    const fnDispatch = useDispatch()
    const oStagedAmts = useSelector(state => state.oDirtyFlagReducer.oCardStaging)
    // const oCardCollection = useSelector(state => state.oCurrentUserCollectionReducer)

    const handleOnSave = (event) =>{
        event.preventDefault()

        if(event.target.name === "Save"){
            //Update currentUserCollection State
            fnDispatch({
                type: 'UPDATE_USER_COLLECTION',
                payload: {
                    oCardsToUpdate: oStagedAmts
                }
            }) 
            
            // fnDispatch(updateUserCollection(oCardCollection.sUserCollectionId, oCardCollection.oUserCollection))
            // fnDispatch(updateUserCollection("5f579dea83374115e407f97e", oCardCollection.oUserCollection))
        }
        
        fnDispatch({type: 'RESET_STAGING_AREA'}) 
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
                <button className="btn btn-sm btn-success btn-outline-success m-1 rounded" type="submit" name="Save" onClick={handleOnSave} style={{color: "black"}}>SAVE</button>
                <button className="btn btn-sm btn-danger btn-outline-danger m-1 rounded" type="submit" name="Cancel" onClick={handleOnSave} style={{color: "black"}}>CANCEL</button>
            </div>
            
        </nav>
    )
}

export default CardNavBarComponent