import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import ForgotComponent from "./components/ForgotComponent";
import LifeCounterComponent from "./components/LifeCounterComponent";
import SignInComponent from "./components/SignInComponent";
import MainComponent from "./components/MainComponent";
import NavBarComponent from "./components/NavBarComponent";
import RegisterComponent from "./components/RegisterComponent";

//Containers
import DisplayedCardsContainer from "./containers/DisplayedCardsContainer";
import ExpansionListContainer from "./containers/ExpansionListContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="mainContainer">
          <Router>
            <div className="static-top sticky-top">
              <NavBarComponent />
            </div>
            <Route path="/" exact render={(props) => <MainComponent />} />
            <Route
              path="/sets"
              exact
              render={(props) => <ExpansionListContainer />}
            />
            <Route
              path="/cards"
              exact
              render={(props) => <DisplayedCardsContainer />}
            />
            <Route
              path="/signIn"
              exact
              render={(props) => <SignInComponent />}
            />
            <Route
              path="/counter"
              exact
              render={(props) => <LifeCounterComponent />}
            />
            <Route
              path="/forgotPass"
              exact
              render={(props) => <ForgotComponent />}
            />
            <Route
              path="/register"
              exact
              render={(props) => <RegisterComponent />}
            />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
