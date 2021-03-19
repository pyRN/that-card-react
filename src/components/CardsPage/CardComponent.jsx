import React, { useState } from "react";
import { useSelector } from "react-redux";

//Components
import CardModalComponent from "./CardModalComponent";
import SpinnerComponent from "./SpinnerComponent";

function CardComponent({ oCardInfo }) {
  let aCardImage;
  let aCardImagesSrcs = [];

  //Global States
  const bIsUserLoggedIn = true; //TESTING ONLY!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const bIsUserLoggedIn = useSelector(
  //   (state) => state.oCurrentUserReducer.sEmailAddress
  // )
  //   ? true
  //   : false;

  const oCurrentCardSet = useSelector(
    (state) =>
      state.oCurrentUserCollectionReducer.oUserCollection[oCardInfo.set]
  );
  const oCurrentCardAmts =
    oCurrentCardSet !== undefined ? oCurrentCardSet[oCardInfo.id] : undefined;
  const oStagedAmts = useSelector(
    (state) => state.oDirtyFlagReducer.oCardStaging[oCardInfo.id]
  );

  //Local States
  const [bFrontOfCard, fnSetFrontOfCard] = useState(true);
  const nRegAmt =
    oStagedAmts !== undefined
      ? oStagedAmts.nRegularAmount
        ? oStagedAmts.nRegularAmount
        : 0
      : oCurrentCardAmts !== undefined
      ? oCurrentCardAmts.nRegularAmount
        ? oCurrentCardAmts.nRegularAmount
        : 0
      : 0;
  const nFoilAmt =
    oStagedAmts !== undefined
      ? oStagedAmts.nFoilAmount
        ? oStagedAmts.nFoilAmount
        : 0
      : oCurrentCardAmts !== undefined
      ? oCurrentCardAmts.nFoilAmount
        ? oCurrentCardAmts.nFoilAmount
        : 0
      : 0;

  const handleOnFlipClick = (event) => {
    event.preventDefault();
    document.getElementById(event.target.name).src =
      document.getElementById(event.target.name).src === aCardImagesSrcs[0]
        ? aCardImagesSrcs[1]
        : aCardImagesSrcs[0];
    fnSetFrontOfCard(!bFrontOfCard);
  };

  //If oCardInfo.id starts with a number, id will be invalid in DOM, need to add alpha at beginning of string
  let sImageId = /^[A-Za-z]/.test(oCardInfo.id)
    ? oCardInfo.id
    : "a" + oCardInfo.id;

  //Check for double sided cards
  if (oCardInfo.card_faces && oCardInfo.card_faces[0].image_uris) {
    aCardImagesSrcs = [
      oCardInfo.card_faces[0].image_uris.normal,
      oCardInfo.card_faces[1].image_uris.normal,
    ];
    aCardImage = (
      <form
        onSubmit={handleOnFlipClick}
        name={"card" + sImageId.replace(/-/g, "")}
      >
        <img
          className="card-img-top mt-0 mb-1 linkTextHover border border-primary rounded"
          alt={oCardInfo.name}
          id={"card" + sImageId.replace(/-/g, "")}
          src={oCardInfo.card_faces[0].image_uris.normal}
          data-toggle="modal"
          data-target={"#" + sImageId.replace(/-/g, "")}
        />
        <input
          className="btn btn-primary btn-block mt-1 mb-1"
          type="submit"
          value="Flip"
        />
      </form>
    );
  }

  //Use for single sided cards
  else {
    aCardImage = (
      <img
        src={oCardInfo.image_uris.normal}
        className="card-img-top mt-0 mb-1 linkTextHover border border-primary rounded"
        alt={oCardInfo.name}
        data-toggle="modal"
        data-target={"#" + sImageId.replace(/-/g, "")}
      />
    );
  }

  return (
    <div
      className="m-1 card border border-success rounded bg-dark justify-content-center d-inline-flex col-md-2"
      style={{ width: "18rem" }}
    >
      <p
        className="mt-1 mb-1 text-success text-center text-wrap linkTextHover border border-success rounded"
        style={{ backgroundColor: "#222" }}
      >
        {oCardInfo.name} ({oCardInfo.rarity.slice(0, 1).toUpperCase()})
      </p>
      <div className="mt-0 mb-0 card-body p-0">
        {aCardImage}
        {oCardInfo.nonfoil ? (
          <SpinnerComponent
            oCardInfo={oCardInfo}
            bIsUserLoggedIn={bIsUserLoggedIn}
            sCardAmountType="nRegularAmount"
            nAmt={nRegAmt}
          />
        ) : null}
        {oCardInfo.foil ? (
          <SpinnerComponent
            oCardInfo={oCardInfo}
            bIsUserLoggedIn={bIsUserLoggedIn}
            sCardAmountType="nFoilAmount"
            nAmt={nFoilAmt}
          />
        ) : null}
      </div>
      <CardModalComponent oCardInfo={oCardInfo} bFrontOfCard={bFrontOfCard} />
    </div>
  );
}

export default CardComponent;
