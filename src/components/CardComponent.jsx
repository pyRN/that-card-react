import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Components
import CardModalComponent from './CardModalComponent'

function CardComponent({ oCardInfo }){
    let aCardImage
    let aCardImagesSrcs = []
    const fnDispatch = useDispatch()

    //Global States
    const bIsUserLoggedIn = true //TESTING ONLY!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //const bIsUserLoggedIn = useSelector(state => state.oCurrentUserReducer.userEmail) ? true : false

    const oHeaderValues = useSelector(state => state.oDisplayedCardsReducer.oHeaderValues)
    const oCurrentCardSet = useSelector(state => state.oCurrentUserCollectionReducer.oUserCollection[oCardInfo.set])
    const oCurrentCardAmts = oCurrentCardSet !== undefined ? oCurrentCardSet[oCardInfo.id] : undefined
    const oStagedAmts = useSelector(state => state.oDirtyFlagReducer.oCardStaging[oCardInfo.id])
    // console.log("rerender - same component not changing spinner")

    //Local States
    const [bFrontOfCard, fnSetFrontOfCard] = useState(true)
    const nRegAmt = oStagedAmts !== undefined ? (oStagedAmts.nRegularAmount ? oStagedAmts.nRegularAmount : 0) : (oCurrentCardAmts !== undefined ? (oCurrentCardAmts.nRegularAmount ? oCurrentCardAmts.nRegularAmount : 0) : 0)
    const nFoilAmt = oStagedAmts !== undefined ? (oStagedAmts.nFoilAmount ? oStagedAmts.nFoilAmount : 0) : (oCurrentCardAmts !== undefined ? (oCurrentCardAmts.nFoilAmount ? oCurrentCardAmts.nFoilAmount : 0) : 0)


    const handleIncrement = (event) => {
        fnDispatch({
            type: 'UPDATE_STAGING_AREA',
            payload: {
                nAmt: event.target.name === "nRegularAmount" ? nRegAmt + 1 : nFoilAmt + 1,
                sCardId: oCardInfo.id,
                sTypeName: event.target.name,
                sExpansionId: oCardInfo.set,
                bIsDirtyFlag: true
            }
        }) 
    }

    const handleDecrement = (event) => {
        fnDispatch({
            type: 'UPDATE_STAGING_AREA',
            payload: {
                nAmt: event.target.name === "nRegularAmount" ? (nRegAmt !== 0 ? nRegAmt - 1 : 0) : (nFoilAmt !== 0 ? nFoilAmt - 1 : 0),
                sCardId: oCardInfo.id,
                sTypeName: event.target.name,
                sExpansionId: oCardInfo.set,
                bIsDirtyFlag: true
            }
        }) 
    }

    const handleOnFlipClick = (event) => {
        event.preventDefault()
        document.getElementById(event.target.name).src = document.getElementById(event.target.name).src === aCardImagesSrcs[0] ? aCardImagesSrcs[1] : aCardImagesSrcs[0]
        fnSetFrontOfCard(!bFrontOfCard)
    }

    const handleLinkClick = (event) => {
        event.preventDefault()
        console.log("TODO: Load cards when link clicked")
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
            <form onSubmit={handleOnFlipClick} name={'card' + sImageId.replace(/-/g, "")}>
                <img className="card-img-top linkTextHover" alt={oCardInfo.name} id={'card' + sImageId.replace(/-/g, "")} src={oCardInfo.card_faces[0].image_uris.normal} data-toggle="modal" data-target={'#' + sImageId.replace(/-/g, "")}/>
                <input className="btn btn-primary btn-block mt-1" type="submit" value="Flip"/>
            </form>
    }

    //Use for single sided cards
    else{
        aCardImage = <img src={oCardInfo.image_uris.normal} className="card-img-top linkTextHover" alt={oCardInfo.name} data-toggle="modal" data-target={'#' + sImageId.replace(/-/g, "")}/>
    }

    return ( 
        <div className="card m-2 p-1 border border-success bg-dark rounded d-inline-flex col-md-2" style={{width: "15rem"}}>
            {aCardImage}
            <div className="card-body">
                <div className="row d-flex justify-content-center">
                    {
                        oHeaderValues.bIsFromSet ?
                            <h5 className="text-primary text-center text-wrap linkTextHover" style={{textDecoration: "underline"}} onClick={handleLinkClick}>
                                {`${oCardInfo.name} (${oCardInfo.rarity.slice(0,1).toUpperCase()})`}
                            </h5>
                        :
                            <h5 className="text-primary text-center text-wrap linkTextHover" style={{textDecoration: "underline"}} onClick={handleLinkClick}>{oCardInfo.set_name}</h5>
                    }
                </div>

                {bIsUserLoggedIn ?  
                                <div className="justify-content-center">
                                    {oCardInfo.nonfoil ?
                                        <div className="input-group mb-3 d-inline">
                                                <button className="text-primary border border-primary mb-1" disabled style={{backgroundColor: "black"}}>Reg: {!oCardInfo.prices.usd ? null : '$' + oCardInfo.prices.usd }</button> 
                                            {bIsUserLoggedIn && oCardInfo.nonfoil ? 

                                                <div className="row d-flex justify-content-center mb-3">
                                                    <button className="btn text-danger border border-primary input-group-prepend" name="nRegularAmount" onClick={handleDecrement} style={{backgroundColor: "black"}}>-</button>
                                                    <input className="text-white bg-secondary border-primary w-25 p-0 m-0" value={parseInt(nRegAmt)} style={{textAlign: "center"}}/>
                                                    <button className="btn text-success border border-primary input-group-append" name="nRegularAmount" onClick={handleIncrement} style={{backgroundColor: "black"}}>+</button>
                                                </div>
                                                
                                            : null}                                          
                                        </div> 
                                    : null
                                    }
                                    {oCardInfo.foil ? 
                                        <div className="input-group mb-3 d-inline">
                                                <button className="text-primary border border-primary mb-1" disabled style={{backgroundColor: "black"}}> {!oCardInfo.foil ? null : !oCardInfo.prices.usd_foil ? 'Foil' : 'Foil: $' + oCardInfo.prices.usd_foil}</button> 
                                            {bIsUserLoggedIn && oCardInfo.foil ? 
                                                <div className="row d-flex justify-content-center mb-3">
                                                    <button className="btn text-danger border border-primary input-group-prepend" name="nFoilAmount" onClick={handleDecrement} style={{backgroundColor: "black"}}>-</button>
                                                    <input className="text-white bg-secondary border-primary w-25 p-0 m-0" value={parseInt(nFoilAmt)} style={{textAlign: "center"}}/>
                                                    <button className="btn text-success border border-primary input-group-append" name="nFoilAmount" onClick={handleIncrement} style={{backgroundColor: "black"}}>+</button>
                                                </div>
                                            : null}
                                        </div> 
                                    : null}
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