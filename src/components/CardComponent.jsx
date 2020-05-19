import React from 'react'

function CardComponent({cardInfo}){
    console.log(cardInfo)
    return ( 
        <div className="card m-1 border border-dark bg-dark rounded" style={{width: "18rem"}}>
            <img src={cardInfo.image_uris.normal} className="card-img-top" alt={cardInfo.name}/>
            <h5 className="text-primary text-center">{cardInfo.set_name}</h5>
            <div className="card-body row">
                <p className="card-subtitle card-text text-primary col-sm">Price: ${cardInfo.prices.usd}</p>
                <p className="card-subtitle card-text text-primary col-sm">Foil: ${cardInfo.prices.usd_foil}</p>
            </div>
        </div>
    )
}

export default CardComponent
