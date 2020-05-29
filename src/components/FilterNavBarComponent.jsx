import  React from 'react'

function FilterNavBarComponent({setCardFilter}){
    
    const handleOnClick = (e) =>{
        e.preventDefault()
        let filterType
        switch(e.target.id){
            case 'filterAll':
                filterType = null
                break
            case 'filterWhite':
                filterType = 'W'
                break
            case 'filterBlue':
                filterType = 'U'
                break
            case 'filterBlack':
                filterType = 'B'
                break
            case 'filterRed':
                filterType = 'R'
                break
            case 'filterGreen':
                filterType = 'G'
                break
            case 'filterColorless':
                filterType = 'Colorless'
                break
            case 'filterMythic':
                filterType = 'Mythic'
                break
            case 'filterRare':
                filterType = 'Rare'
                break
            case 'filterUncommon':
                filterType = 'Uncommon'
                break
            case 'filterCommon':
                filterType = 'Common'
                break
            case 'filterHighLow':
                filterType = 'HighToLow'
                break
            case 'filterLowHigh':
                filterType = 'LowToHigh'
                break
            default:
                break
        }
        setCardFilter(filterType)
    }

    return(
        <li className="dropup btn btn-sm btn-outline-primary btn-secondary ml-1">
            <a className="nav-link dropdown-toggle btn-sm" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "black"}}>
                Filter
            </a>
            <div className="dropdown-menu border border-primary" aria-labelledby="navbarDropdown" style={{backgroundColor: "black"}}>
                <button className="dropdown-item text-primary" id="filterAll" onClick={handleOnClick}>All</button>
                <button className="dropdown-item text-primary" id="filterWhite" onClick={handleOnClick}>White</button>
                <button className="dropdown-item text-primary" id="filterBlue" onClick={handleOnClick}>Blue</button>
                <button className="dropdown-item text-primary" id="filterBlack" onClick={handleOnClick}>Black</button>
                <button className="dropdown-item text-primary" id="filterRed" onClick={handleOnClick}>Red</button>
                <button className="dropdown-item text-primary" id="filterGreen" onClick={handleOnClick}>Green</button>
                <button className="dropdown-item text-primary" id="filterColorless" onClick={handleOnClick}>Colorless</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item text-primary" id="filterMythic" onClick={handleOnClick}>Mythic</button>
                <button className="dropdown-item text-primary" id="filterRare" onClick={handleOnClick}>Rare</button>
                <button className="dropdown-item text-primary" id="filterUncommon" onClick={handleOnClick}>Uncommon</button>
                <button className="dropdown-item text-primary" id="filterCommon" onClick={handleOnClick}>Common</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item text-primary" id="filterHighLow" onClick={handleOnClick}>High to Low</button>
                <button className="dropdown-item text-primary" id="filterLowHigh" onClick={handleOnClick}>Low to High</button>
            </div>
        </li>
    )
}

export default FilterNavBarComponent