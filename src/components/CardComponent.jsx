/*TODO:
    1)Need to add flip button for double sided cards
    2)Add code to have modal pop up when double sided cards are clicked
    3)Refactor Code */

import React, { useState } from 'react'

//Components
import CardModalComponent from './CardModalComponent'

function CardComponent({cardInfo, isUserLogin, isFromSet}){
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
        setCurrentRegCount(e.target.value)
    }

    const handleOnChangeFoil = (e) => {
        e.preventDefault()
        setCurrentFoilCount(e.target.value)
    }
    
    //Check for double sided cards
    if(cardInfo.card_faces && cardInfo.card_faces[0].image_uris){   
        cardImagesSrcs = [cardInfo.card_faces[0].image_uris.normal, cardInfo.card_faces[1].image_uris.normal]
        cardImage = <input className="card-img-top" type="image" src={cardInfo.card_faces[0].image_uris.normal} onClick={handleOnClick} alt={cardInfo.name}/>
    }
    //Use for single sided cards
    else{
        //If cardInfo.id starts with a number, it will not work, need to add alpha at beginning of string
        let imgId = /^[A-Za-z]/.test(cardInfo.id) ? cardInfo.id : 'a' + cardInfo.id
        cardImage = <img src={cardInfo.image_uris.normal} className="card-img-top" alt={cardInfo.name} data-toggle="modal" data-target={'#' + imgId.replace(/-/g, "")}/>
    }

    return ( 
        <div className="card m-2 p-1 border border-success bg-dark rounded d-inline-flex col-md-2" style={{width: "15rem"}}>
            {cardImage}
            <div className="card-body">
                <div className="row d-flex justify-content-center">
                    <h5 className="text-primary text-center text-wrap">{isFromSet ? `${cardInfo.name} (${cardInfo.rarity.slice(0,1).toUpperCase()})` : cardInfo.set_name}</h5>
                </div>

                {isUserLogin ?  
                                <div className="justify-content-center">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">  
                                            <button className="text-primary border border-primary" disabled style={{backgroundColor: "black"}}>Reg: {!cardInfo.prices.usd ? null : '$' + cardInfo.prices.usd }</button>
                                        </div>                                           
                                        <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={currentRegCount} onChange={handleOnChangeReg}/>
                                    </div>
                                    {cardInfo.foil ? <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="text-primary border border-primary" disabled style={{backgroundColor: "black"}}> {!cardInfo.foil ? null : !cardInfo.prices.usd_foil ? 'Foil' : 'Foil: $' + cardInfo.prices.usd_foil}</button> 
                                        </div>
                                        {isUserLogin && cardInfo.foil ? <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={currentFoilCount} onChange={handleOnChangeFoil}/>
                                            : null}
                                    </div> : null}
                                </div>
                            :   
                                <div>
                                    <div className="input-group justify-content-center">
                                        {cardInfo.prices.usd ? <button className=" text-primary mr-1 border border-primary" disabled style={{backgroundColor: "black"}}>Reg: ${cardInfo.prices.usd }</button> : null}
                                        {cardInfo.foil ? <button className="text-primary border border-primary" disabled style={{backgroundColor: "black"}}>Foil: ${cardInfo.prices.usd_foil}</button> : null}
                                    </div>
                                </div>}
            </div>
            <CardModalComponent cardInfo={cardInfo}/>
        </div>
    )
}

export default CardComponent
