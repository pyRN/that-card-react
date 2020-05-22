import React, { useState } from 'react'

function CardComponent({cardInfo, isUserLogin}){
    let cardImage
    let cardImagesSrcs = []
    const [currentRegCount, setCurrentRegCount] = useState(0)
    const [currentFoilCount, setCurrentFoilCount] = useState(0)

    const handleOnClick = (e) => {
        e.preventDefault()
        let currentSource = e.target.src === cardImagesSrcs[0] ? cardImagesSrcs[1] : cardImagesSrcs[0]
        e.target.src = currentSource
    }

    const handleOnChangeReg = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const handleOnChangeFoil = (e) => {
        console.log(e)
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

                {isUserLogin ?  <div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">  
                                            <button className="text-primary border border-primary" disabled style={{backgroundColor: "black"}}>Reg: {!cardInfo.prices.usd ? 'N/A' : '$' + cardInfo.prices.usd }</button>
                                        </div>                                           
                                        <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={currentRegCount} onChange={handleOnChangeReg}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="text-primary border border-primary" disabled style={{backgroundColor: "black"}}>Foil: {!cardInfo.foil ? 'No Foil' : !cardInfo.prices.usd_foil ? 'N/A' : '$' + cardInfo.prices.usd_foil}</button>
                                        </div>
                                        {isUserLogin && cardInfo.foil ? <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={currentFoilCount} onChange={handleOnChangeFoil}/>
                                            : null}
                                    </div>
                                </div>
                :   <div>
                        <div className="input-group">
                            <button className=" text-primary mr-1 border border-primary" disabled style={{backgroundColor: "black"}}>Reg: {!cardInfo.prices.usd ? 'N/A' : '$' + cardInfo.prices.usd }</button>
                            <button className="text-primary border border-primary" disabled style={{backgroundColor: "black"}}>Foil: {!cardInfo.foil ? 'No Foil' : !cardInfo.prices.usd_foil ? 'N/A' : '$' + cardInfo.prices.usd_foil}</button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default CardComponent
