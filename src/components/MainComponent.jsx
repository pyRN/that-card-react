import React, { useState } from "react";
import { useSelector} from "react-redux";

//Multimedia
// import CarouselImg1 from '../multimedia/Carousel_Img_1.jpg'
// import CarouselImg2 from '../multimedia/Carousel_Img_2.jpg'

function MainComponent() {
  //State
  const [bIsDirtyFlag] = useState(
    useSelector((state) => state.oDirtyFlagReducer.bIsDirtyFlag)
  );

  return (
    <div>
      {bIsDirtyFlag ? (
        <h2 align="center" className="m-1 text-danger">
          You have unsaved data
        </h2>
      ) : null}
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

export default MainComponent;
