import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import CardsComponent from './components/CardsComponent'
import LoginComponent from './components/LoginComponent'
import MainComponent from './components/MainComponent'
import NavBarComponent from './components/NavBarComponent'
import SetComponent from './components/SetComponent'

const App = () => {
    //States
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

    const onSetClicked = (setClicked) => {
        // const history = useHistory()
        fetch(`https://api.scryfall.com/cards/search?order=set&q=e%3A${setClicked}&unique=prints`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log(data.data)
                setCardList(data.data)
            });
    }

    useEffect(() => {
        fetch('https://api.scryfall.com/sets')
        .then(response => response.json())
        .then(data => {
            setExpansionList(data.data)
        });
    }, [])

    return (
        <div className="mainContainer">      
            <Router>      
                <div className="static-top sticky-top">
                    <NavBarComponent handleCardSearch={handleCardSearch}/>
                </div>
                <Route path="/" exact render={props => <MainComponent/>}/>
                <Route path="/sets" exact render={props => <SetComponent expansionList={expansionList} onSetClicked={onSetClicked}/>}/>
                <Route path="/cards" exact render={props => <CardsComponent searchedCardName={searchedCardName} cardList={cardList} />}/>
                <Route path="/login" exact render={props => <LoginComponent />}/>
            </Router>
        </div>
    );
}

export default App