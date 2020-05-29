import React, { useState } from 'react'

function TableComponent({ cardInfo, isUserLogin }){
    //State
    const [currentRegCount, setCurrentRegCount] = useState(0)
    const [currentFoilCount, setCurrentFoilCount] = useState(0)

    //Functions
    const handleOnChangeReg = (e) => {
        e.preventDefault()
        setCurrentRegCount(e.target.value)
    }

    const handleOnChangeFoil = (e) => {
        e.preventDefault()
        setCurrentFoilCount(e.target.value)
    }

    return(
        <tr>
            <td>
                <button type="button" className="btn btn-primary-outline text-primary" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">{cardInfo.name}</button>
            </td>
            <td>{cardInfo.set_name}</td>
            <td>{cardInfo.rarity.slice(0,1).toUpperCase()}</td>
            <td>${cardInfo.prices.usd} (Foil: ${cardInfo.prices.usd_foil})</td>
            {isUserLogin ?
                <td>
                    <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={currentRegCount} onChange={handleOnChangeReg}/>
                </td> : null}
                {isUserLogin ?
                <td>
                    <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={currentFoilCount} onChange={handleOnChangeFoil}/>
                </td>
            : null}
        </tr>
    )
}

export default TableComponent