import React, {useState} from 'react'

//Components
import CardComponent from './CardComponent'
import CardNavBarComponent from './CardNavBarComponent'
import TableComponent from './TableComponent'

//Media
import LastChance from '../multimedia/Last-chance.jpg'
import VampiricTutor from '../multimedia/Vampiric-tutor.jpg'

function CardsComponent({ cardList, isUserLogin, isFromSet, isLoadingContent, onSetClicked, setIsFromSet }){
    console.log("TESTING: CardsComponent Render")

    //States
    const [viewSelected, setViewSelected] = useState('cardView')
    const [cardFilter, setCardFilter] = useState(null)
    let cards

    //Render "Loading..." if waiting for promise to resolve
    if(isLoadingContent){
        return(
            <div align="center" className="justify-content-center mt-3">
                <h2 className="text-primary">Loading. . .</h2>
            </div>
        )
    }

    //Filtering Cards
    if(cardList !== undefined){
        //If cardFilter is null, bypass, no filters being used
        if(cardFilter !== null){
            //Check if filtered by color
            if(['W', 'B', 'U', 'R', 'G'].includes(cardFilter)){
                cardList = cardList.filter(function(card){
                    return card.color_identity.includes(cardFilter)
                })
            }
            //Check if filtered by colorless
            if(cardFilter === "Colorless"){
                cardList = cardList.filter(function(card){
                    return card.color_identity.length === 0
                })
            }

            //Check if filtered by rarity
            if(['Mythic', 'Rare', 'Uncommon', 'Common'].includes(cardFilter)){
                cardList = cardList.filter(function(card){
                    return card.rarity.toLowerCase() === cardFilter.toLowerCase()
                })
            }

            //Check if filtered by price
            if(cardFilter === "LowToHigh"){
                cardList = cardList.sort((a, b) => (parseFloat(a.prices.usd) > parseFloat(b.prices.usd)) ? 1 : -1)
            }
            if(cardFilter === "HighToLow"){
                cardList = cardList.sort((a, b) => (parseFloat(a.prices.usd) < parseFloat(b.prices.usd)) ? 1 : -1)
            }
        }
        //If no filters
        else{
            cardList = cardList
        }
    }

    if(cardList !== undefined){
        cards = cardList.map(function(cardInfo){
            if(!cardInfo.digital){   
                if(viewSelected === 'cardView')
                    return <CardComponent cardInfo={cardInfo} key={cardInfo.id} isUserLogin={isUserLogin} isFromSet={isFromSet} onSetClicked={onSetClicked} setIsFromSet={setIsFromSet}/>
                if(viewSelected === 'tblView')
                    return <TableComponent cardInfo={cardInfo} key={cardInfo.id} isUserLogin={isUserLogin}/>
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
                    <CardNavBarComponent setViewSelected={setViewSelected} setCardFilter={setCardFilter}/> 
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
                                {isUserLogin ? <th>Regular Quantity</th> : null}
                                {isUserLogin ? <th>Foil Quantity</th> :null}
                            </tr>
                        </thead>
                        <tbody>
                            {cards}
                        </tbody>
                    </table>            
                    <CardNavBarComponent setViewSelected={setViewSelected} setCardFilter={setCardFilter} /> 
                </div>
            )
        }
    }            
}

export default CardsComponent