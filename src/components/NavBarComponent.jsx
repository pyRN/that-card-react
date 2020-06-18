import React from 'react'
import { Link, useHistory } from 'react-router-dom';

function NavBarComponent({handleCardSearch, navTitle, setNavTitle, setIsFromSet, isUserLogin}){
    const history = useHistory()

    console.log("TESTING: NavBarComponent Render")

    function getCardName(e){
        e.preventDefault();
        let sCardName = document.getElementById("searchInput")
        setIsFromSet(false)
        handleCardSearch(sCardName.value)
        setNavTitle(`Do I Have: ${sCardName.value.toUpperCase()}`)
        sCardName.value = ''
        history.push('/cards')
    }

    return ( 
        <nav className="navbar navbar-expand-lg  navbar-dark border border-primary" style={{backgroundColor: "black"}}>
            <h2 className="navbar-brand text-primary text-wrap">{navTitle}</h2>
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
                        {isUserLogin ? 
                            <div className="dropdown show">
                                <a className="nav-link text-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{backgroundColor: "black"}}>
                                    <Link className="dropdown-item text-primary resourceHover" to="/counter">Life Counter</Link>
                                    <Link className="dropdown-item text-primary resourceHover" to="/check">Check Deck</Link>
                                </div>
                            </div>
                            :
                            <div className="dropdown show">
                                <a className="nav-link text-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
                                </a>
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