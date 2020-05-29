import React from 'react'
import { useHistory } from 'react-router-dom';

function ExpansionComponent({expansionName, expansionIcon, expansionCode, onSetClicked, setNavTitle, setIsFromSet}){
    const history = useHistory()
    
    const handleOnClick = (e) => {
        e.preventDefault()
        setIsFromSet(true)
        onSetClicked(expansionCode)
        setNavTitle(`Do I Have Cards From: ${expansionName.toUpperCase()}`)
        history.push('/cards')
    }

    return ( 
        <div className="card m-2 p-1 border border-success bg-dark rounded col-md-2" onClick={handleOnClick} style={{cursor: "pointer"}}>
            <div align="center">
                <img src={expansionIcon} align="center" className="card-img-top" alt={expansionName} style={{height: 100, width: 100}}/>
            </div>
            <div className="card-body justify-content-center">
                <p className="text-primary text-center">{expansionName}</p>
            </div>
        </div>
    )
}

export default ExpansionComponent