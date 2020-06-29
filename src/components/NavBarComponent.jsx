import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function NavBarComponent(){
    const fDispatch = useDispatch()
    const fHistory = useHistory()
    const oHeaderInfo = useSelector(state => state.oDisplayedCardsReducer.oHeaderValues)
    const oUserInfo = useSelector(state => state.oCurrentUserReducer)

    console.log("TESTING: NavBarComponent Render")

    function getCardName(event){
        event.preventDefault();
        let sCardName = document.getElementById("searchInput")

        fDispatch({ 
            type: 'SET_SEARCH_RESULTS',
            payload: {
                sTitle: `Do I Have: ${sCardName.value.trim().toUpperCase()}`,
                bIsFromSet: false,
                sInputValue: sCardName.value.trim()
            }
        })

        document.getElementById("searchInput").value = ''
        // fHistory.push('/cards')
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
                    <li>
                        {oUserInfo.userEmail ? 
                            <div className="dropdown show">
                                <p className="nav-link text-primary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
                                </p>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{backgroundColor: "black"}}>
                                    <Link className="dropdown-item text-primary resourceHover" to="/counter">Life Counter</Link>
                                    <Link className="dropdown-item text-primary resourceHover" to="/check">Check Deck</Link>
                                </div>
                            </div>
                            :
                            <div className="dropdown show">
                                <p className="nav-link text-primary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
                                </p>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{backgroundColor: "black"}}>
                                    <Link className="dropdown-item text-primary resourceHover" to="/counter">Life Counter</Link>
                                </div>
                            </div>
                        }
                    </li>
                    <li className="nav-item mr-4">
                        <Link className="nav-link text-primary" to="/login">Login</Link>
                    </li>
                    <li>
                        <form className="form-inline" onSubmit={getCardName}>
                            <input className="form-control mr-sm-2" type="search" id="searchInput" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={getCardName}>Search</button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarComponent;