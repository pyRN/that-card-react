import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function ExpansionComponent({ oExpansionInfo }){
    const fHistory = useHistory()
    const oUserInfo = useSelector(state => state.oCurrentUserReducer)
    const fDispatch = useDispatch()
    
    const handleOnClick = (event) => {
        event.preventDefault()
        fDispatch({ 
            type: 'SET_SEARCH_RESULTS',
            payload: {
                sTitle: `Do I Have Cards From: ${oExpansionInfo.name}`,
                bIsFromSet: true,
                sInputValue: oExpansionInfo.code
            }
        })

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
        // fHistory.push('/cards')
    }

    return ( 
        <div className="card m-2 p-1 border border-success bg-dark rounded col-md-2" onClick={handleOnClick} style={{cursor: "pointer"}}>
            <div align="center">
                <img src={oExpansionInfo.icon_svg_uri} align="center" className="card-img-top" alt={oExpansionInfo.name} style={{height: 100, width: 100}}/>
            </div>
            <div className="card-body justify-content-center">
                <h5 className="text-primary text-center">{oExpansionInfo.name}</h5>
            </div>
                {oUserInfo.userEmail ? 
                        <div>
                            <div className="d-flex justify-content-around">
                                <p className="text-success">Owned: </p>
                                <p className="text-success">Total: {oExpansionInfo.card_count}</p>
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