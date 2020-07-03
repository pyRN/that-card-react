import React, { useState } from 'react'
import { useSelector } from 'react-redux'

//Components
import CardModalComponent from './CardModalComponent'

function TableComponent({ oCardInfo }){
    //Global State
    const bIsUserLoggedIn = useSelector(state => state.oCurrentUserReducer.userEmail) ? true : false

    //Local State
    const [nCurrentRegCount, fSetCurrentRegCount] = useState(0)
    const [nCurrentFoilCount, fSetCurrentFoilCount] = useState(0)

    //Functions
    const handleOnChangeReg = (event) => {
        event.preventDefault()
        fSetCurrentRegCount(event.target.value)
    }

    const handleOnChangeFoil = (event) => {
        event.preventDefault()
        fSetCurrentFoilCount(event.target.value)
    }

    //If oCardInfo.id starts with a number, it will not work, need to add alpha beginning of string
    let sImageId = /^[A-Za-z]/.test(oCardInfo.id) ? oCardInfo.id : 'a' + oCardInfo.id

    return(
        <tr>
            <td>
                <button type="button" className="btn btn-primary-outline text-primary" data-toggle="modal" data-target={'#' + sImageId.replace(/-/g, "")}>{oCardInfo.name}</button>
            </td>
            <td>{oCardInfo.set_name}</td>
            <td>{oCardInfo.rarity.slice(0,1).toUpperCase()}</td>
            <td>{oCardInfo.nonfoil ? '$' + oCardInfo.prices.usd : ''} {oCardInfo.foil ? '($' + oCardInfo.prices.usd_foil + ')': ''}</td>
            {bIsUserLoggedIn ?
                    oCardInfo.nonfoil ?
                        <td>
                            <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={nCurrentRegCount} onChange={handleOnChangeReg}/>
                        </td> 
                    :
                    <td>
                        <p>N/A</p>
                    </td>
                : 
                    null
            }
            {bIsUserLoggedIn ?
                    oCardInfo.foil ?
                        <td>
                            <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={nCurrentFoilCount} onChange={handleOnChangeFoil}/>
                        </td>
                    :
                        <td>
                            <p>N/A</p>
                        </td>
                : 
                    null
            }
            <CardModalComponent oCardInfo={oCardInfo}/>
        </tr>
    )
}

export default TableComponent