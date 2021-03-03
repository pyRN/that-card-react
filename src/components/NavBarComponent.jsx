import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function NavBarComponent() {
  const fnDispatch = useDispatch();
  const fnHistory = useHistory();

  //Global State
  const bIsDirtyFlag = useSelector(
    (state) => state.oDirtyFlagReducer.bIsDirtyFlag
  );
  const bIsLoggedIn = useSelector(
    (state) => state.oCurrentUserReducer.bIsLoggedIn
  );
  const oHeaderInfo = useSelector(
    (state) => state.oDisplayedCardsReducer.oHeaderValues
  );

  const oStagedAmts = useSelector(
    (state) => state.oDirtyFlagReducer.oCardStaging
  );
  const oUserInfo = useSelector((state) => state.oCurrentUserReducer);

  //Functions
  const handleOnSubmit = (event) => {
    event.preventDefault();
    let sSearchInput = document.getElementById("searchInput").value;

    fnDispatch({
      type: "SET_LOADING",
      payload: {
        bIsDataLoading: true,
      },
    });

    const fnGetCardsFromExpansion = (cards, currentURL) => {
      fetch(currentURL)
        .then((response) => response.json())
        .then((data) => {
          //Check to see if search query returns cards
          if (data.object === "list") {
            //When searching for cards, only return cards that are printed (Not digital versions)
            let aNonDigitalCards = data.data.filter((card) => {
              return !card.digital;
            });
            cards = cards.concat(aNonDigitalCards);
            if (data.has_more) {
              fnGetCardsFromExpansion(cards, data.next_page);
            } else {
              fnDispatch({
                type: "SET_SEARCH_RESULTS",
                payload: {
                  sTitle: `Do I Have: ${sSearchInput.trim().toUpperCase()}`,
                  bIsFromSet: false,
                  sInputValue: sSearchInput.trim().toUpperCase(),
                  aDisplayedCards: cards,
                  bIsDataLoading: false,
                },
              });
            }
          }
          //If search is invalid (error 404), return undefined card list
          else {
            fnDispatch({
              type: "SET_SEARCH_RESULTS",
              payload: {
                sTitle: `Do I Have: ${sSearchInput.trim().toUpperCase()}`,
                bIsFromSet: false,
                sInputValue: sSearchInput.trim().toUpperCase(),
                aDisplayedCards: undefined,
              },
            });
          }
        });
    };

    fnGetCardsFromExpansion(
      [],
      `https://api.scryfall.com/cards/search?unique=prints&q=%22${sSearchInput}%22`
    );
    document.getElementById("searchInput").value = "";
    fnHistory.push("/cards");
  };

  const fnHandleOnSave = (event) => {
    event.preventDefault();

    if (event.target.name === "Save") {
      //Update currentUserCollection State
      fnDispatch({
        type: "UPDATE_USER_COLLECTION",
        payload: {
          oCardsToUpdate: oStagedAmts,
        },
      });

      // fnDispatch(updateUserCollection(oCardCollection.sUserCollectionId, oCardCollection.oUserCollection))
      // fnDispatch(updateUserCollection("5f579dea83374115e407f97e", oCardCollection.oUserCollection))
    }

    fnDispatch({ type: "RESET_STAGING_AREA" });
  };

  return (
    <nav
      className="navbar navbar-expand-lg  navbar-dark border border-primary"
      style={{ backgroundColor: "black" }}
    >
      {bIsDirtyFlag ? (
        <form className="form-inline">
          <h3 className="btn-sm btn-danger btn-outline-danger m-1 rounded text-white bg-danger">
            Unsaved Data!
          </h3>
          <button
            className="btn btn-sm btn-danger btn-outline-danger m-1 rounded text-danger"
            type="submit"
            name="Cancel"
            onClick={fnHandleOnSave}
            style={{ backgroundColor: "black" }}
          >
            CANCEL
          </button>
          <button
            className="btn btn-sm btn-success btn-outline-success m-1 rounded text-white"
            type="submit"
            name="Save"
            onClick={fnHandleOnSave}
            style={{ color: "black" }}
          >
            SAVE
          </button>
        </form>
      ) : (
        <h2 className="navbar-brand text-primary text-wrap">
          {oHeaderInfo.sTitle}
        </h2>
      )}
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/sets">
              Sets
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/cards">
              Cards
            </Link>
          </li>
          <li className="nav-item">
            {/* {oUserInfo.userEmail ?  */}
            <div className="dropdown show my-0">
              <p
                className="nav-link text-primary dropdown-toggle my-0"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
              </p>
              <div
                className="dropdown-menu border border-primary"
                aria-labelledby="dropdownMenuLink"
                style={{ backgroundColor: "black" }}
              >
                <Link
                  className="dropdown-item text-primary resourceHover"
                  to="/counter"
                >
                  Life Counter
                </Link>
                {oUserInfo.sUserEmail ? (
                  <Link
                    className="dropdown-item text-primary resourceHover"
                    to="/check"
                  >
                    Check Deck
                  </Link>
                ) : null}
              </div>
            </div>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link text-primary" to="/login">
              {bIsLoggedIn ? "Logout" : "Login"}
            </Link>
          </li>
          <li>
            <form className="form-inline" onSubmit={handleOnSubmit}>
              <div className="input-group">
                <input
                  className="form-control border border-success"
                  type="search"
                  id="searchInput"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ backgroundColor: "#222", color: "green" }}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-success "
                    type="submit"
                    onClick={handleOnSubmit}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}
