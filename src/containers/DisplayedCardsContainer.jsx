import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//Components
import CardComponent from '../components/CardComponent'
import CardNavBarComponent from '../components/CardNavBarComponent'
import TableComponent from '../components/TableComponent'

//Media
import LastChance from '../multimedia/Last-chance.jpg'
import VampiricTutor from '../multimedia/Vampiric-tutor.jpg'

function DisplayedCardsContainer(){
    let aFilterdCardList, aDisplayCards

    //Global States
    const aDisplayedCardList = useSelector(state => state.oDisplayedCardsReducer.aDisplayedCards)
    const bIsDataLoading = useSelector(state => state.oDisplayedCardsReducer.bIsDataLoading)
    const bIsUserLoggedIn = true //TESTING ONLY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //const bIsUserLoggedIn = useSelector(state => state.oCurrentUserReducer.userEmail) ? true : false
    const sSearchInput = useSelector(state => state.oDisplayedCardsReducer.oHeaderValues.sInputValue)

    //Local States
    const [sCardFilter, fSetCardFilter] = useState(null)
    const [sViewSelected, fSetViewSelected] = useState('cardView')
    const [bIsDirtyFlag] = useState(useSelector(state => state.oDirtyFlagReducer.bIsDirtyFlag))

    console.log("TESTING: CardsComponent Render")

    //Scroll to top when navigating to this page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    //Render "Loading..." while loading data
    if(bIsDataLoading){
        return(
            <div align="center" className="justify-content-center mt-3">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <h2 className="text-primary">Loading. . .</h2>
                {bIsDirtyFlag ? 
                    <h2 align="center" className="m-1 text-danger">You have unsaved data</h2>
                    : 
                    null
                }
            </div>
        )
    }
    //Render if on card page without search
    else if(!sSearchInput){
        return(
            <div align="center" className="justify-content-center mt-3" style={{backgroundColor: "black"}}>
                {bIsDirtyFlag ? 
                    <h2 align="center" className="m-1 text-danger">You have unsaved data</h2>
                    : 
                    null
                }
                <h3 className="text-primary">Search for a card</h3>
                <img className="w-25" src={VampiricTutor} alt="Vampiric Tutor"/>
            </div>
        )
    }
    //Render if search is invalid
    else if(!aDisplayedCardList){
        return(
            <div align="center" className="justify-content-center mt-3" style={{backgroundColor: "black"}}>
                {bIsDirtyFlag ? 
                    <h2 align="center" className="m-1 text-danger">You have unsaved data</h2>
                    : 
                    null
                }
                <h3 className="text-primary">Not a valid search</h3>
                <img className="w-25" src={LastChance} alt="Last Chance"/>
            </div>
        )
    }
    //Render loaded cards
    else{
        //Filtering Cards
        if(aDisplayedCardList !== undefined){
            //If sCardFilter is null, bypass, no filters being used
            if(sCardFilter !== null){
                //Check if filtered by color
                if(['W', 'B', 'U', 'R', 'G'].includes(sCardFilter)){
                    aFilterdCardList = aDisplayedCardList.filter(function(card){
                        return card.color_identity.includes(sCardFilter)
                    })
                }
                //Check if filtered by colorless
                if(sCardFilter === "Colorless"){
                    aFilterdCardList = aDisplayedCardList.filter(function(card){
                        return card.color_identity.length === 0
                    })
                }

                //Check if filtered by rarity
                if(['Mythic', 'Rare', 'Uncommon', 'Common'].includes(sCardFilter)){
                    aFilterdCardList = aDisplayedCardList.filter(function(card){
                        return card.rarity.toLowerCase() === sCardFilter.toLowerCase()
                    })
                }

                //Check if filtered by price
                if(sCardFilter === "LowToHigh"){
                    aFilterdCardList = aDisplayedCardList.sort((a, b) => (parseFloat(a.prices.usd) > parseFloat(b.prices.usd)) ? 1 : -1)
                }
                if(sCardFilter === "HighToLow"){
                    aFilterdCardList = aDisplayedCardList.sort((a, b) => (parseFloat(a.prices.usd) < parseFloat(b.prices.usd)) ? 1 : -1)
                }
            }
            //If no filters
            else{
                aFilterdCardList = aDisplayedCardList
            }
        }
        
        if(aFilterdCardList && aFilterdCardList !== undefined){
            aDisplayCards = aFilterdCardList.map(function(oCardInfo){
                return sViewSelected === 'cardView' ? <CardComponent oCardInfo={oCardInfo} key={oCardInfo.id}/> : <TableComponent oCardInfo={oCardInfo} key={oCardInfo.id}/>
            }) 
        }

        if(sViewSelected === 'cardView'){
            return(
                <div>
                    {bIsDirtyFlag ? 
                        <h2 align="center" className="m-1 text-danger">You have unsaved data</h2>
                        : 
                        null
                    }
                    <div align="center" className="justify-content-center mt-3 mb-5" style={{backgroundColor: "black", display: "flex", flexWrap: "wrap"}}>
                        {aDisplayCards}
                        <CardNavBarComponent fSetCardFilter={fSetCardFilter} fSetViewSelected={fSetViewSelected}/> 
                    </div>
                </div>) 
        }
        
        if(sViewSelected === 'tblView'){
            return(
                <div>
                    <table className="table table-dark table-striped table-bordered table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Card Name</th>
                                <th>Set Name</th>
                                <th>Rarity</th>
                                <th>Price</th>
                                {bIsUserLoggedIn ? <th>Regular Quantity</th> : null}
                                {bIsUserLoggedIn ? <th>Foil Quantity</th> :null}
                            </tr>
                        </thead>
                        <tbody>
                            {aDisplayCards}
                        </tbody>
                    </table>            
                    <CardNavBarComponent fSetCardFilter={fSetCardFilter} fSetViewSelected={fSetViewSelected}/> 
                </div>
            )
        }
    }
}

export default DisplayedCardsContainer