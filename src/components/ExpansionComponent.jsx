import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

function ExpansionComponent({ expansionInfo, userEmail }){
    const history = useHistory()
    const counter = useSelector(state => state.currentUser)
    
    const handleOnClick = (e) => {
        e.preventDefault()
        // setIsFromSet(true)
        // onSetClicked(expansionInfo.code)
        // setNavTitle(`Do I Have Cards From: ${expansionInfo.name.toUpperCase()}`)

        // fetch(`https://api.scryfall.com/cards/search?order=set&q=e%3A${setClicked}&unique=prints`)
        //     .then(response => response.json())
        //     .then(data => {
        //         if(data.has_more){
        //             handleMultiplePagesSearch(data.data, data.next_page)
        //         }
        //         else{
        //             setIsLoadingContent(false)
        //             setCardList(data.data)
        //         }
        //     });
        
        console.log(counter)
        // history.push('/cards')
    }

    return ( 
        <div className="card m-2 p-1 border border-success bg-dark rounded col-md-2" onClick={handleOnClick} style={{cursor: "pointer"}}>
            <div align="center">
                <img src={expansionInfo.icon_svg_uri} align="center" className="card-img-top" alt={expansionInfo.name} style={{height: 100, width: 100}}/>
            </div>
            <div className="card-body justify-content-center">
                <h5 className="text-primary text-center">{expansionInfo.name}</h5>
            </div>
                {userEmail ? 
                        <div>
                            <div className="d-flex justify-content-around">
                                <p className="text-success">Owned: </p>
                                <p className="text-success">Total: {expansionInfo.card_count}</p>
                            </div>  
                            <div className="progress" style={{height: 20}}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div> 
                    : 
                        null
                }
        </div>
    )
}

export default ExpansionComponent