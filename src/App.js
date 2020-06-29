import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import CardsComponent from './components/CardsComponent'
import ForgotComponent from './components/ForgotComponent'
import LifeCounterComponent from './components/LifeCounterComponent'
import LoginComponent from './components/LoginComponent'
import MainComponent from './components/MainComponent'
import NavBarComponent from './components/NavBarComponent'
import RegisterComponent from './components/RegisterComponent'

//Containers
import ExpansionListContainer from './containers/ExpansionListContainer'

class App extends React.Component{
    
    //Functions
    // const handleCardSearch = (searchedCardName) => {
    //     setIsLoadingContent(true)
    //     fetch(`https://api.scryfall.com/cards/search?unique=prints&q=%22${searchedCardName}%22`)
    //         .then(response => response.json())
    //         .then(data => {
    //             if(data.has_more){
    //                 handleMultiplePagesSearch(data.data, data.next_page)
    //             }
    //             else{
    //                 setIsLoadingContent(false)
    //                 setCardList(data.data)
    //             }
    //         });
    // }

    // const handleMultiplePagesSearch = (cardsArray, nextPageUrl) =>{
    //     fetch(nextPageUrl)
    //         .then(response => response.json())
    //         .then(data => {
    //             if(data.has_more){
    //                 handleMultiplePagesSearch(cardsArray.concat(data.data), data.next_page)
    //             }
    //             else{
    //                 setIsLoadingContent(false)
    //                 setCardList(cardsArray.concat(data.data))
    //             }
    //         })
    // }

    // const onSetClicked = (setClicked) => {
    //     setIsLoadingContent(true)
    //     fetch(`https://api.scryfall.com/cards/search?order=set&q=e%3A${setClicked}&unique=prints`)
    //         .then(response => response.json())
    //         .then(data => {
    //             if(data.has_more){
    //                 handleMultiplePagesSearch(data.data, data.next_page)
    //             }
    //             else{
    //                 setIsLoadingContent(false)
    //                 setCardList(data.data)
    //             }
    //         });
    // }

    // useEffect(() => {
    //     fetch('https://api.scryfall.com/sets')
    //     .then(response => response.json())
    //     .then(data => {
    //         // setExpansionList(data.data)
    //         {dispatch(setExpansionListState(data.data))}

    //     });
    // }, [])

    // useEffect(() => {
    //         fetch('https://api.scryfall.com/sets')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data.data)
    //             // setExpansionList(data.data)
    //             // {dispatch(setExpansionListState(data.data))}

    //         });
    //     }, [])

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
                        <Route path="/cards" exact render={props => <CardsComponent />}/>
                        <Route path="/login" exact render={props => <LoginComponent />}/>
                        <Route path="/counter" exact render={props => <LifeCounterComponent />}/>
                        <Route path="/forgotPass" exact render={props => <ForgotComponent />}/>
                        <Route path="/register" exact render={props => <RegisterComponent />}/>
                    </Router>
                </div>
            </Provider>
            
            // <Provider store={store}>
            //     <div className="mainContainer">      
            //         <Router>      
            //             <div className="static-top sticky-top">
            //                 <NavBarComponent handleCardSearch={handleCardSearch} navTitle={navTitle} setNavTitle={setNavTitle} setIsFromSet={setIsFromSet} isUserLogin={isUserLogin}/>
            //             </div>
            //             <Route path="/" exact render={props => <MainComponent/>}/>
            //             <Route path="/sets" exact render={props => <SetComponent />}/>
            //             {/* <SetComponent expansionList={expansionList} onSetClicked={onSetClicked} setNavTitle={setNavTitle} setIsFromSet={setIsFromSet} isUserLogin={isUserLogin}/>}/> */}
            //             <Route 
            //                 path="/cards" 
            //                 exact 
            //                 render={
            //                     props => 
            //                         <CardsComponent 
            //                             cardList={cardList} 
            //                             isUserLogin={isUserLogin} 
            //                             isFromSet={isFromSet} 
            //                             isLoadingContent={isLoadingContent} 
            //                             onSetClicked={onSetClicked} 
            //                             setIsFromSet={setIsFromSet}
            //                             setNavTitle={setNavTitle}/>
            //                 }
            //             />
                        // <Route path="/login" exact render={props => <LoginComponent setIsUserLogin={setIsUserLogin}/>}/>
                        // <Route path="/counter" exact render={props => <LifeCounterComponent />}/>
                        // <Route path="/forgotPass" exact render={props => <ForgotComponent setIsUserLogin={setIsUserLogin}/>}/>
                        // <Route path="/register" exact render={props => <RegisterComponent setIsUserLogin={setIsUserLogin}/>}/>
            //         </Router>
            //     </div>
            // </Provider>
        );
    }
}

export default App