/*
    TODO:
    1)This isn't very good on mobile - need to fix sizing
 */

import React from 'react'

function ExpansionComponent({expansionName, expansionIcon, key}){
    const handleOnClick = () => {

    }

    return ( 
        <button className="border border-dark bg-dark rounded m-2" onclick={handleOnClick}>
            <img src={expansionIcon} className="card-img-top" alt={expansionName} style={{width: '25%', height: '25%'}}/>
            <p className="text-primary text-center">{expansionName}</p>
        </button>
    )
}

export default ExpansionComponent