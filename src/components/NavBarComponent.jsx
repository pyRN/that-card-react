import React from 'react'
import { Link } from 'react-router-dom';

function NavBarComponent({handleCardSearch}){
    function getCardName(e){
        e.preventDefault();
        let sCardName = document.getElementById("searchInput")
        handleCardSearch(sCardName.value)
        sCardName.value = ''
    }
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h2 className="navbar-brand text-primary">MTG Cards</h2>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarResponsive"    
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* <MainClockComponent/> */}
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