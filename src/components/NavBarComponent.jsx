import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function NavBarComponent(){
    const fnDispatch = useDispatch()
    const fnHistory = useHistory()

    //Global State
    const oHeaderInfo = useSelector(state => state.oDisplayedCardsReducer.oHeaderValues)
    const oUserInfo = useSelector(state => state.oCurrentUserReducer)

    const fDispatch = useDispatch()

    function handleOnSubmit(event){
        event.preventDefault();        
        let sSearchInput = document.getElementById("searchInput").value

        fnDispatch({ 
            type: 'SET_LOADING',
            payload: {
                bIsDataLoading: true
            }
        })

        function getCardsFromExpansion(cards, currentURL){
            fetch(currentURL)
                .then(response => response.json())
                .then(data => {
                    //Check to see if search query returns cards
                    if(data.object === "list"){
                        //When searching for cards, only return cards that are printed (Not digital versions)
                        let aNonDigitalCards = data.data.filter(card => {return !card.digital})
                        cards = cards.concat(aNonDigitalCards)
                        if(data.has_more){
                            getCardsFromExpansion(cards, data.next_page)
                        }
                        else{
                            fnDispatch({ 
                                type: 'SET_SEARCH_RESULTS',
                                payload: {
                                    sTitle: `Do I Have: ${sSearchInput.trim().toUpperCase()}`,
                                    bIsFromSet: false,
                                    sInputValue: sSearchInput.trim().toUpperCase(),
                                    aDisplayedCards: cards,
                                    bIsDataLoading: false
                                }
                            })
                        }
                    }
                    //If search is invalid (error 404), return undefined card list
                    else{
                        fnDispatch({ 
                            type: 'SET_SEARCH_RESULTS',
                            payload: {
                                sTitle: `Do I Have: ${sSearchInput.trim().toUpperCase()}`,
                                bIsFromSet: false,
                                sInputValue: sSearchInput.trim().toUpperCase(),
                                aDisplayedCards: undefined
                            }
                        })
                    }
                });
        }

        getCardsFromExpansion([], `https://api.scryfall.com/cards/search?unique=prints&q=%22${sSearchInput}%22`)
        document.getElementById("searchInput").value = ''
        fnHistory.push('/cards')
    }

    return ( 
        <nav className="navbar navbar-expand-lg  navbar-dark border border-primary" style={{backgroundColor: "black"}}>
            <h2 className="navbar-brand text-primary text-wrap">{oHeaderInfo.sTitle}</h2>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarResponsive"    
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">                        
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" >
                        <Link className="nav-link text-primary" to="/">Main</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/sets">Sets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/cards">Cards</Link>
                    </li>
                    <li className="nav-item">
                        {/* {oUserInfo.userEmail ?  */}
                            <div className="dropdown show my-0">
                                <p className="nav-link text-primary dropdown-toggle my-0" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
                                </p>
                                <div className="dropdown-menu border border-primary" aria-labelledby="dropdownMenuLink" style={{backgroundColor: "black"}}>
                                    <Link className="dropdown-item text-primary resourceHover" to="/counter">Life Counter</Link>
                                    {oUserInfo.sUserEmail ? <Link className="dropdown-item text-primary resourceHover" to="/check">Check Deck</Link> : null}
                                </div>
                            </div>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className="nav-link text-primary" to="/login">Login</Link>
                    </li>
                    <li>
                        <form className="form-inline" onSubmit={handleOnSubmit}>
                            <input className="form-control mr-sm-2" type="search" id="searchInput" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleOnSubmit}>Search</button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarComponent;