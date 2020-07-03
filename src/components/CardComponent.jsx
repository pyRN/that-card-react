import React, { useState } from 'react'
import { useSelector } from 'react-redux'

//Components
import CardModalComponent from './CardModalComponent'

function CardComponent({ oCardInfo }){
    let aCardImage
    let aCardImagesSrcs = []

    //Global States
    const bIsUserLoggedIn = useSelector(state => state.oCurrentUserReducer.userEmail) ? true : false
    const oHeaderValues = useSelector(state => state.oDisplayedCardsReducer.oHeaderValues)

    //Local States
    const [nCurrentRegCount, fSetCurrentRegCount] = useState(0)
    const [nCurrentFoilCount, fSetCurrentFoilCount] = useState(0)
    const [bFrontOfCard, fSetFrontOfCard] = useState(true)

    const handleOnClick = (e) => {
        e.preventDefault()
        document.getElementById(e.target.name).src = document.getElementById(e.target.name).src === aCardImagesSrcs[0] ? aCardImagesSrcs[1] : aCardImagesSrcs[0]
        fSetFrontOfCard(!bFrontOfCard)
    }

    const handleOnChangeReg = (e) => {
        e.preventDefault()
        fSetCurrentRegCount(e.target.value)
    }

    const handleOnChangeFoil = (e) => {
        e.preventDefault()
        fSetCurrentFoilCount(e.target.value)
    }

    const handleLinkClick = (e) => {
        e.preventDefault()
        // setIsFromSet(true)
        // setNavTitle(`Do I Have Cards From: ${oCardInfo.set_name.toUpperCase()}`)
        // onSetClicked(oCardInfo.set)
        
    }
    
    //If oCardInfo.id starts with a number, id will be invalid in DOM, need to add alpha at beginning of string
    let sImageId = /^[A-Za-z]/.test(oCardInfo.id) ? oCardInfo.id : 'a' + oCardInfo.id

    //Check for double sided cards
    if(oCardInfo.card_faces && oCardInfo.card_faces[0].image_uris){   
        aCardImagesSrcs = [oCardInfo.card_faces[0].image_uris.normal, oCardInfo.card_faces[1].image_uris.normal]
        aCardImage = 
            <form onSubmit={handleOnClick} name={'card' + sImageId.replace(/-/g, "")}>
                <img className="card-img-top" alt={oCardInfo.name} id={'card' + sImageId.replace(/-/g, "")} src={oCardInfo.card_faces[0].image_uris.normal} data-toggle="modal" data-target={'#' + sImageId.replace(/-/g, "")}/>
                <input className="btn btn-primary btn-block mt-1" type="submit" value="Flip"/>
            </form>
    }

    //Use for single sided cards
    else{
        aCardImage = <img src={oCardInfo.image_uris.normal} className="card-img-top" alt={oCardInfo.name} data-toggle="modal" data-target={'#' + sImageId.replace(/-/g, "")}/>
    }

    return ( 
        <div className="card m-2 p-1 border border-success bg-dark rounded d-inline-flex col-md-2" style={{width: "15rem"}}>
            {aCardImage}
            <div className="card-body">
                <div className="row d-flex justify-content-center">
                    {
                        oHeaderValues.bIsFromSet ?
                            <h5 className="text-primary text-center text-wrap">
                                {`${oCardInfo.name} (${oCardInfo.rarity.slice(0,1).toUpperCase()})`}
                            </h5>
                        :
                            <h5 className="text-primary text-center text-wrap linkTextHover" onClick={handleLinkClick} style={{textDecoration: "underline"}}>{oCardInfo.set_name}</h5>
                    }
                </div>

                {bIsUserLoggedIn ?  
                                <div className="justify-content-center">
                                    {oCardInfo.nonfoil ?
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">  
                                                <button className="text-primary border border-primary" disabled style={{backgroundColor: "black"}}>Reg: {!oCardInfo.prices.usd ? null : '$' + oCardInfo.prices.usd }</button>
                                            </div>                                           
                                            <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={nCurrentRegCount} onChange={handleOnChangeReg}/>
                                        </div> 
                                        : null
                                    }
                                    {oCardInfo.foil ? <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="text-primary border border-primary" disabled style={{backgroundColor: "black"}}> {!oCardInfo.foil ? null : !oCardInfo.prices.usd_foil ? 'Foil' : 'Foil: $' + oCardInfo.prices.usd_foil}</button> 
                                        </div>
                                        {bIsUserLoggedIn && oCardInfo.foil ? <input className="form-control col-sx-1 border border-primary" style={{backgroundColor: "#A9A9A9", color: "blue"}} type="number" max="1000" min="0" placeholder={nCurrentFoilCount} onChange={handleOnChangeFoil}/>
                                            : null}
                                    </div> : null}
                                </div>
                            :   
                                <div>
                                    <div className="input-group justify-content-center">
                                        {oCardInfo.nonfoil ? <button className=" text-primary mr-1 border border-primary" disabled style={{backgroundColor: "black"}}>Reg: ${oCardInfo.prices.usd }</button> : null}
                                        {oCardInfo.foil ? <button className="text-primary border border-primary" disabled style={{backgroundColor: "black"}}>Foil: ${oCardInfo.prices.usd_foil}</button> : null}
                                    </div>
                                </div>}
            </div>
            <CardModalComponent oCardInfo={oCardInfo} bFrontOfCard={bFrontOfCard}/>
        </div>
    )
}

export default CardComponent