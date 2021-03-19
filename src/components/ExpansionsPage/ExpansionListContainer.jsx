import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import ExpansionComponent from "./ExpansionComponent";

function ExpansionListContainer() {
  const aExpansionsList = useSelector(
    (state) => state.oExpansionsListReducer.aExpansions
  );
  const fDispatch = useDispatch();

  useEffect(() => {
    //Only make one call to this API for list of sets and save in state
    if (!aExpansionsList.length) {
      fetch("https://api.scryfall.com/sets")
        .then((response) => response.json())
        .then((data) => {
          fDispatch({
            type: "SET_EXPANSION_LIST",
            payload: data.data,
          });
        });
    }
    //Scroll to top when navigating to this page
    window.scrollTo(0, 0);
  });

  //Only show expansions if they exist
  if (aExpansionsList !== undefined && aExpansionsList.length) {
    return (
      <div>
        <div
          align="center"
          className="justify-content-center mt-3 mb-5"
          style={{
            backgroundColor: "black",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {aExpansionsList.map(function (oExpansionInfo) {
            return !oExpansionInfo.digital ? (
              <ExpansionComponent
                key={oExpansionInfo.name}
                oExpansionInfo={oExpansionInfo}
              />
            ) : null;
          })}
        </div>
      </div>
    );
  }

  //If no expansion list, show loading
  return (
    <div align="center" className="justify-content-center mt-3">
      <h2 className="text-primary d-inline-flex">Loading</h2>
      <div className="spinner-border text-primary d-inline-flex" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default ExpansionListContainer;
