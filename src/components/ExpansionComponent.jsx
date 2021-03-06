import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function ExpansionComponent({ oExpansionInfo }) {
  const fnDispatch = useDispatch();
  const fnHistory = useHistory();
  // const bIsUserLoggedIn = true; //TESTING ONLY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const bIsUserLoggedIn = useSelector(
    (state) => state.oCurrentUserReducer.sEmailAddress
  )
    ? true
    : false;

  const oUserCollectionExpansion = useSelector(
    (state) =>
      state.oCurrentUserCollectionReducer.oUserCollection[oExpansionInfo.code]
  );
  const nOwnedCards =
    oUserCollectionExpansion !== undefined
      ? Object.keys(oUserCollectionExpansion).length
      : 0;
  const nPercentageOwned = isNaN(
    (nOwnedCards / parseInt(oExpansionInfo.card_count)) * 100
  )
    ? 0
    : (nOwnedCards / parseInt(oExpansionInfo.card_count)) * 100;

  const handleOnClick = (event) => {
    event.preventDefault();

    function getCardsFromExpansion(cards, currentURL) {
      fnDispatch({
        type: "SET_LOADING",
        payload: {
          bIsDataLoading: true,
        },
      });

      fetch(currentURL)
        .then((response) => response.json())
        .then((data) => {
          cards = cards.concat(data.data);
          if (data.has_more) {
            getCardsFromExpansion(cards, data.next_page);
          } else {
            fnDispatch({
              type: "SET_SEARCH_RESULTS",
              payload: {
                sTitle: `Do I Have Cards From: ${oExpansionInfo.name}`,
                bIsFromSet: true,
                sInputValue: oExpansionInfo.code,
                aDisplayedCards: cards,
                bIsDataLoading: false,
              },
            });
          }
        });
    }

    getCardsFromExpansion(
      [],
      `https://api.scryfall.com/cards/search?order=set&q=e%3A${oExpansionInfo.code}&unique=prints`
    );
    fnHistory.push("/cards");
  };

  return (
    <div
      className="card m-2 p-1 border border-success bg-dark rounded col-md-2"
      onClick={handleOnClick}
      style={{ cursor: "pointer" }}
    >
      <div align="center">
        <img
          src={oExpansionInfo.icon_svg_uri}
          align="center"
          className="card-img-top"
          alt={oExpansionInfo.name}
          style={{ height: 100, width: 100 }}
        />
      </div>
      <div className="card-body justify-content-center">
        <h5 className="text-primary text-center">{oExpansionInfo.name}</h5>
      </div>
      {bIsUserLoggedIn ? (
        <div>
          <div className="d-flex justify-content-around">
            <p className="text-success">Owned: {nOwnedCards}</p>
            <p className="text-success">Total: {oExpansionInfo.card_count}</p>
          </div>
          <div className="progress" style={{ height: 20 }}>
            <div
              className="progress-bar progress-bar-striped bg-primary"
              role="progressbar"
              style={{ width: nPercentageOwned.toString() + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {nPercentageOwned.toString() + "%"}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ExpansionComponent;
