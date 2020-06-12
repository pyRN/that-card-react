import React, {useState} from 'react'

//Components
import CardComponent from './CardComponent'
import CardNavBarComponent from './CardNavBarComponent'
import TableComponent from './TableComponent'

//Media
import LastChance from '../multimedia/Last-chance.jpg'
import VampiricTutor from '../multimedia/Vampiric-tutor.jpg'

function CardsComponent({ cardList, isUserLogin, isFromSet, isLoadingContent }){
    console.log("TESTING: CardsComponent Render")

    //States
    const [viewSelected, setViewSelected] = useState('cardView')
    const [cardFilter, setCardFilter] = useState(null)

    if(isLoadingContent){
        return(
            <div align="center" className="justify-content-center mt-3">
                <h2 className="text-primary">Loading. . .</h2>
            </div>
        )
    }

    console.log("Card filter", cardFilter)

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
        else{
            cardList = cardList
        }
    }

    console.log(cardList)
    let cards = cardList !== undefined ? 
        cardList.map(function(cardInfo){
                        if(!cardInfo.digital){   
                            if(viewSelected === 'cardView')
                                return <CardComponent cardInfo={cardInfo} key={cardInfo.id} isUserLogin={isUserLogin} isFromSet={isFromSet}/>
                            if(viewSelected === 'tblView')
                                return <TableComponent cardInfo={cardInfo} key={cardInfo.id} isUserLogin={isUserLogin}/>
                        }
                    }) 
        : null
                                        
    if(cardList === undefined){
        return(
            <div align="center" className="justify-content-center mt-3" style={{backgroundColor: "black"}}>
                <h3 className="text-primary">Not a valid search</h3>
                <img className="w-25" src={LastChance} alt="Last Chance"/>
            </div>
        )
    }
    else if(!cards.length){
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
                <div className="">
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