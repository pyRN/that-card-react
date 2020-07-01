import React, { useState } from 'react'
import { useSelector } from 'react-redux'

//Components
import CardComponent from '../components/CardComponent'
import CardNavBarComponent from '../components/CardNavBarComponent'
import TableComponent from '../components/TableComponent'

//Media
import LastChance from '../multimedia/Last-chance.jpg'
import VampiricTutor from '../multimedia/Vampiric-tutor.jpg'

function DisplayedCardsContainer(){
    //Global States
    const aDisplayedCardList = useSelector(state => state.oDisplayedCardsReducer.data)
    const bIsUserLoggedIn = useSelector(state => state.oCurrentUserReducer.userEmail) ? true : false

    //Local States
    const [cardFilter, setCardFilter] = useState(null)
    const [viewSelected, setViewSelected] = useState('cardView')

    let aFilterdCardList, cards

    console.log("TESTING: CardsComponent Render")

    //Render "Loading..." if waiting for promise to resolve
    if(aDisplayedCardList && !aDisplayedCardList.length){
        return(
            <div align="center" className="justify-content-center mt-3">
                <h2 className="text-primary">Loading. . .</h2>
            </div>
        )
    }

    //Filtering Cards
    if(aDisplayedCardList !== undefined){
        //If cardFilter is null, bypass, no filters being used
        if(cardFilter !== null){
            //Check if filtered by color
            if(['W', 'B', 'U', 'R', 'G'].includes(cardFilter)){
                aFilterdCardList = aDisplayedCardList.filter(function(card){
                    return card.color_identity.includes(cardFilter)
                })
            }
            //Check if filtered by colorless
            if(cardFilter === "Colorless"){
                aFilterdCardList = aDisplayedCardList.filter(function(card){
                    return card.color_identity.length === 0
                })
            }

            //Check if filtered by rarity
            if(['Mythic', 'Rare', 'Uncommon', 'Common'].includes(cardFilter)){
                aFilterdCardList = aDisplayedCardList.filter(function(card){
                    return card.rarity.toLowerCase() === cardFilter.toLowerCase()
                })
            }

            //Check if filtered by price
            if(cardFilter === "LowToHigh"){
                aFilterdCardList = aDisplayedCardList.sort((a, b) => (parseFloat(a.prices.usd) > parseFloat(b.prices.usd)) ? 1 : -1)
            }
            if(cardFilter === "HighToLow"){
                aFilterdCardList = aDisplayedCardList.sort((a, b) => (parseFloat(a.prices.usd) < parseFloat(b.prices.usd)) ? 1 : -1)
            }
        }
        //If no filters
        else{
            aFilterdCardList = aDisplayedCardList
        }
    }
    
    if(aFilterdCardList && aFilterdCardList !== undefined){
        cards = aFilterdCardList.map(function(oCardInfo){
            if(!aFilterdCardList.digital){   
                if(viewSelected === 'cardView')
                    return <CardComponent oCardInfo={oCardInfo} key={oCardInfo.id}/>
                if(viewSelected === 'tblView')
                    return <TableComponent oCardInfo={oCardInfo} key={oCardInfo.id}/>
            }
        }) 
    }
    //If cardList is undefined, this means the search was invalid
    else{
        cards = null
        return(
            <div align="center" className="justify-content-center mt-3" style={{backgroundColor: "black"}}>
                <h3 className="text-primary">Not a valid search</h3>
                <img className="w-25" src={LastChance} alt="Last Chance"/>
            </div>
        )
    }

    //If cardList has no length, no cards are viewed.
    if(!cards.length  && !cardFilter){
        return(
            <div align="center" className="justify-content-center mt-3" style={{backgroundColor: "black"}}>
                <h3 className="text-primary">Search for a card</h3>
                <img className="w-25" src={VampiricTutor} alt="Vampiric Tutor"/>
            </div>
        )
    }  
    else{
        if(viewSelected === 'cardView'){
            return(
                <div align="center" className="justify-content-center mt-3 mb-5" style={{backgroundColor: "black", display: "flex", flexWrap: "wrap"}}>
                    {cards}
                    <CardNavBarComponent /> 
                </div>) 
        }
        if(viewSelected === 'tblView'){
            return(
                <div>
                    <table className="table table-dark table-striped table-bordered table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Card Name</th>
                                <th>Set Name</th>
                                <th>Rarity</th>
                                <th>Price</th>
                                {bIsUserLoggedIn? <th>Regular Quantity</th> : null}
                                {bIsUserLoggedIn ? <th>Foil Quantity</th> :null}
                            </tr>
                        </thead>
                        <tbody>
                            {cards}
                        </tbody>
                    </table>            
                    <CardNavBarComponent /> 
                </div>
            )
        }
    }            
}

export default DisplayedCardsContainer