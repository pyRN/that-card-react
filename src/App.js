import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Import Components
import MainComponent from './MainComponent'
import NavBarComponent from './NavBarComponent'

const App = () => {

    const [searchedCardName, setSearchedCardName] = useState('')
    const [cardList, setCardList] = useState([])
    const [expansionList, setExpansionList] = useState([])

    const handleCardSearch = (searchedCardName) => {
        setSearchedCardName(searchedCardName)

        fetch(`https://api.scryfall.com/cards/search?unique=prints&q=%22${searchedCardName}%22`)
            .then(response => response.json())
            .then(data => {
                setCardList(data.data)
            });
    }

    // fetch('https://api.scryfall.com/sets')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setExpansionList(data.data)
    //     });


    return (
        <div className="mainContainer">      
            <Router>      
                <div className="static-top sticky-top">
                    <NavBarComponent handleCardSearch={handleCardSearch}/>
                </div>
                <Route path="/" exact render={props => <MainComponent searchedCardName={searchedCardName} cardList={cardList}/>}/>
            </Router>
        </div>
    );
}

export default App