/*
    TODO:
    1)This isn't very good on mobile - need to fix sizing
 */

import React from 'react'
import { useHistory } from 'react-router-dom';

function ExpansionComponent({expansionName, expansionIcon, onSetClicked, expansionCode}){
    const history = useHistory()
    const handleOnClick = (e) => {
        e.preventDefault()
        onSetClicked(expansionCode)
        history.push('/cards')
    }

    return ( 
        <button className="card border border-dark bg-dark rounded m-2 d-inline-flex" style={{height: 100, width: "20%"}} onClick={handleOnClick}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={expansionIcon} className="card-img-top" alt={expansionName} style={{height: 100, width: 100}}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="text-primary text-center">{expansionName}</p>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default ExpansionComponent