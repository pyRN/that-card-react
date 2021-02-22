import React from "react";

export default function MainComponent() {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid mt-3"
        style={{ backgroundColor: "#111" }}
      >
        <div align="center" className="container">
          <h1 className="display-4 text-success">Do I Have That Card?</h1>
          <p className="lead text-success ml-3">
            A database for logging Magic: The Gathering&#169; cards
          </p>
        </div>
      </div>
    </div>
  );
}
