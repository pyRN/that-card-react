import React from 'react'

function CardComponent({cardInfo}){
    let cardImage
    let cardImagesSrcs = []

    const handleOnClick = (e) => {
        e.preventDefault()
        let currentSource = e.target.src === cardImagesSrcs[0] ? cardImagesSrcs[1] : cardImagesSrcs[0]
        e.target.src = currentSource
    }
    
    if(cardInfo.card_faces && cardInfo.card_faces[0].image_uris){           //For flip cards
        cardImagesSrcs = [cardInfo.card_faces[0].image_uris.normal, cardInfo.card_faces[1].image_uris.normal]
        cardImage = <input className="card-img-top" type="image" src={cardInfo.card_faces[0].image_uris.normal} onClick={handleOnClick} alt={cardInfo.name}/>
    }
    else{
        cardImage = <img src={cardInfo.image_uris.normal} className="card-img-top" alt={cardInfo.name}/>
    }

    return ( 
        <div className="card m-2 p-1 border border-success bg-dark rounded d-inline-flex" style={{width: "15rem"}}>
            {cardImage}
            <div className="card-body">
                <div className="row d-flex justify-content-center">
                    <h5 className="text-primary text-center">{cardInfo.set_name}</h5>
                </div>
                <div className="row d-flex justify-content-start">
                    {cardInfo.prices.usd ? <p className="card-subtitle card-text text-primary col-sm">Price: ${cardInfo.prices.usd}</p> : null}
                </div>
                <div className="row d-flex justify-content-start">
                    {cardInfo.prices.usd_foil ? <p className="card-subtitle card-text text-primary col-sm">Foil: ${cardInfo.prices.usd_foil}</p> : null}
                </div>
            </div>
        </div>
    )
}

export default CardComponent
