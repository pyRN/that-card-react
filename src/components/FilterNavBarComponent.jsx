import  React from 'react'

function FilterNavBarComponent({setCardFilter}){
    
    const handleOnChange = (e) =>{
        e.preventDefault()
        console.log("here")
        console.log(e.target.name)
        e.target.name === "All" ? setCardFilter(null) : setCardFilter(e.target.name)
    }

    return(
        <select className="custom-select" onChange={handleOnChange}>
            <optgroup label="Color">
                <option name="All" value="All">All</option>
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
    )
}

export default FilterNavBarComponent