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

    if(isLoadingContent){
        return(
            <div align="center" className="justify-content-center mt-3">
                <h2 className="text-primary">Loading. . .</h2>
            </div>
        )
    }

    let key = 0
    let cards = cardList !== undefined ? 
        cardList.map(function(cardInfo){
                        if(!cardInfo.digital){       
                            key++
                            if(viewSelected === 'cardView')
                                return <CardComponent cardInfo={cardInfo} key={key} isUserLogin={isUserLogin} isFromSet={isFromSet}/>
                            if(viewSelected === 'tblView')
                                return <TableComponent cardInfo={cardInfo} key={key} isUserLogin={isUserLogin}/>
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
    return (     
        <div align="center" className="justify-content-center mt-3 mb-5" style={{backgroundColor: "black", display: "flex", flexWrap: "wrap"}}>
            { viewSelected === 'cardView' ? cards :     <table className="table table-dark table-striped table-bordered table-hover  table-responsive-sm">
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
                                                        </table>}
            <CardNavBarComponent setViewSelected={setViewSelected}/> 
        </div>
    )
}

export default CardsComponent