import React from 'react'
import CardComponent from './CardComponent'
import CardNavBarComponent from './CardNavBarComponent'
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
        return(
            <div align="center" className="justify-content-center mt-3" style={{backgroundColor: "black"}}>
                <h3 className="text-primary">Search for a card</h3>
                <img className="w-25" src={VampiricTutor}/>
            </div>
        )
    }                                  
    return (     
        <div align="center" className="justify-content-center mt-3 mb-5" style={{backgroundColor: "black"}}>
            { cards }
            <CardNavBarComponent/> 
        </div>
    )
}

export default CardsComponent