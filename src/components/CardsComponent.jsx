import React from 'react'
import CardComponent from './CardComponent'
import VampiricTutor from '../multimedia/Vampiric-tutor.jpg'

function CardsComponent({cardList}){
    console.log("TESTING: CardsComponent Render")
    let key = 0
    let cards = cardList !== undefined ? cardList.map(function(cardInfo){
                                                if(!cardInfo.digital){       
                                                    key++
                                                    return <CardComponent cardInfo={cardInfo} key={key}/>
                                                }
                                            }) : null
    if(!cards.length){
        cards = <div>
                    <h3 className="text-primary">Search for a card</h3>
                    <img className="w-25" src={VampiricTutor}/>
                </div>
    }                                  
    return (         
        <div align="center" className="justify-content-center mt-3" style={{backgroundColor: "black"}}>
            { cards }
        </div>
    )
}

export default CardsComponent