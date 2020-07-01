import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import ForgotComponent from './components/ForgotComponent'
import LifeCounterComponent from './components/LifeCounterComponent'
import LoginComponent from './components/LoginComponent'
import MainComponent from './components/MainComponent'
import NavBarComponent from './components/NavBarComponent'
import RegisterComponent from './components/RegisterComponent'

//Containers
import ExpansionListContainer from './containers/ExpansionListContainer'
import DisplayedCardsContainer from './containers/DisplayedCardsContainer'

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <div className="mainContainer">
                    <Router>
                        <div className="static-top sticky-top">
                            <NavBarComponent />
                        </div>
                        <Route path="/" exact render={props => <MainComponent/>}/>
                        <Route path="/sets" exact render={props => <ExpansionListContainer />}/>
                        <Route path="/cards" exact render={props => <DisplayedCardsContainer />}/>
                        <Route path="/login" exact render={props => <LoginComponent />}/>
                        <Route path="/counter" exact render={props => <LifeCounterComponent />}/>
                        <Route path="/forgotPass" exact render={props => <ForgotComponent />}/>
                        <Route path="/register" exact render={props => <RegisterComponent />}/>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App

// Functions
//     const handleCardSearch = (searchedCardName) => {
//         setIsLoadingContent(true)
//         fetch(`https://api.scryfall.com/cards/search?unique=prints&q=%22${searchedCardName}%22`)
//             .then(response => response.json())
//             .then(data => {
//                 if(data.has_more){
//                     handleMultiplePagesSearch(data.data, data.next_page)
//                 }
//                 else{
//                     setIsLoadingContent(false)
//                     setCardList(data.data)
//                 }
//             });
//     }

//     const handleMultiplePagesSearch = (cardsArray, nextPageUrl) =>{
//         fetch(nextPageUrl)
//             .then(response => response.json())
//             .then(data => {
//                 if(data.has_more){
//                     handleMultiplePagesSearch(cardsArray.concat(data.data), data.next_page)
//                 }
//                 else{
//                     setIsLoadingContent(false)
//                     setCardList(cardsArray.concat(data.data))
//                 }
//             })
    }