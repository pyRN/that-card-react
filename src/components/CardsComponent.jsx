import React from 'react'
import CardComponent from './CardComponent'

function CardsComponent({searchedCardName, cardList}){
    let cards = cardList !== undefined ? cardList.map(function(cardInfo){
        if(!cardInfo.digital)       //Do not show online only versions of the card
            return <CardComponent cardInfo={cardInfo} />
    })
    :
    ''

    return (         
        <div 
            style={
                {
                    display: "grid",
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridGap: 10,
                    margin: 10,
                    backgroundColor: "black"
                }
        }>
            {
                cards
            }
        </div>
    )
}

export default CardsComponent