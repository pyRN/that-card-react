import React from 'react'
import CardComponent from './CardComponent'

function CardsComponent({cardList}){
    console.log("TESTING: CardsComponent Render")
    let key = 0
    let cards = cardList !== undefined ? cardList.map(function(cardInfo){
        // console.log(cardInfo)
        if(!cardInfo.digital)       //Do not show online only versions of the card
            key++
            return <CardComponent cardInfo={cardInfo} key={key}/>
    })
    :
    ''

    return (         
        <div align="center" className="justify-content-center mt-3" style={{backgroundColor: "black"}}>
            {
                cards
            }
        </div>
    )
}

export default CardsComponent