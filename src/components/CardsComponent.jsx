import React from 'react'
import CardComponent from './CardComponent'

function CardsComponent({searchedCardName, cardList}){
    let cards = cardList !== undefined ? cardList.map(function(cardInfo){
        if(!cardInfo.digital)       //Do not show online only versions of the card
            return <CardComponent cardInfo={cardInfo} key={cardInfo.oracle_id}/>
    })
    :
    ''

    return (         
        <div align="center" className="justify-content-center" style={{backgroundColor: "black"}}>
            {
                cards
            }
        </div>
    )
}

export default CardsComponent