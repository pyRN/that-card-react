import React, { useState } from "react";
import { useSelector } from "react-redux";

//Multimedia
import ChandraImg from "../multimedia/Counter_Img_Chandra.jpg";
import GideonImg from "../multimedia/Counter_Img_Gideon.jpg";
import JaceImg from "../multimedia/Counter_Img_Jace.jpg";
import LilianaImg from "../multimedia/Counter_Img_Liliana.jpg";
import NissaImg from "../multimedia/Counter_Img_Nissa.jpg";

function LifeCounterComponent() {
  const [bIsDirtyFlag] = useState(
    useSelector((state) => state.oDirtyFlagReducer.bIsDirtyFlag)
  );
  const profileImgs = [ChandraImg, GideonImg, JaceImg, LilianaImg, NissaImg];

  //States
  const [lifeTotals, setLifeTotals] = useState({
    playerOneLife: 20,
    playerTwoLife: 20,
    playerOneImgSrc:
      profileImgs[Math.floor(Math.random() * profileImgs.length)],
    playerTwoImgSrc:
      profileImgs[Math.floor(Math.random() * profileImgs.length)],
  });

  console.log("TESTING: LifeCounterComponent Render");

  const handleIncrement = (e) => {
    e.target.name === "playerOne"
      ? setLifeTotals({
          playerOneLife: parseInt(lifeTotals.playerOneLife) + 1,
          playerTwoLife: parseInt(lifeTotals.playerTwoLife),
          playerOneImgSrc: lifeTotals.playerOneImgSrc,
          playerTwoImgSrc: lifeTotals.playerTwoImgSrc,
        })
      : setLifeTotals({
          playerOneLife: parseInt(lifeTotals.playerOneLife),
          playerTwoLife: parseInt(lifeTotals.playerTwoLife) + 1,
          playerOneImgSrc: lifeTotals.playerOneImgSrc,
          playerTwoImgSrc: lifeTotals.playerTwoImgSrc,
        });
  };

  const handleDecrement = (e) => {
    e.target.name === "playerOne"
      ? setLifeTotals({
          playerOneLife: parseInt(lifeTotals.playerOneLife) - 1,
          playerTwoLife: parseInt(lifeTotals.playerTwoLife),
          playerOneImgSrc: lifeTotals.playerOneImgSrc,
          playerTwoImgSrc: lifeTotals.playerTwoImgSrc,
        })
      : setLifeTotals({
          playerOneLife: parseInt(lifeTotals.playerOneLife),
          playerTwoLife: parseInt(lifeTotals.playerTwoLife) - 1,
          playerOneImgSrc: lifeTotals.playerOneImgSrc,
          playerTwoImgSrc: lifeTotals.playerTwoImgSrc,
        });
  };

  return (
    <div>
      {bIsDirtyFlag ? (
        <h2 align="center" className="m-1 text-danger">
          You have unsaved data
        </h2>
      ) : null}
      <div
        align="center"
        className="justify-content-center mt-3 mb-5"
        style={{ backgroundColor: "black", display: "flex", flexWrap: "wrap" }}
      >
        <div
          className="card rounded d-inline-flex col-sm-2 m-3 border border-primary"
          style={{
            backgroundImage: `url(${lifeTotals.playerOneImgSrc})`,
            backgroundSize: "cover",
          }}
        >
          <h5 className="card-title text-primary">Player 1</h5>
          <div className="card-body">
            <button
              className="btn btn-success btn-sm col-md"
              name="playerOne"
              onClick={handleIncrement}
            >
              +
            </button>
            <h2 className="text-primary col-md">{lifeTotals.playerOneLife}</h2>
            <button
              className="btn btn-danger btn-sm col-md"
              name="playerOne"
              onClick={handleDecrement}
            >
              -
            </button>
          </div>
        </div>
        <div
          className="card rounded d-inline-flex col-sm-2 m-3 border border-primary"
          style={{
            backgroundImage: `url(${lifeTotals.playerTwoImgSrc})`,
            backgroundSize: "cover",
          }}
        >
          <h5 className="card-title text-primary">Player 2</h5>
          <div className="card-body">
            <button
              className="btn btn-success btn-sm col-md"
              name="playerTwo"
              onClick={handleIncrement}
            >
              +
            </button>
            <h2 className="text-primary col-md">{lifeTotals.playerTwoLife}</h2>
            <button
              className="btn btn-danger btn-sm col-md"
              name="playerTwo"
              onClick={handleDecrement}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeCounterComponent;
