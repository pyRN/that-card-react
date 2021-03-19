import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import DisplayedCardsContainer from "./components/CardsPage/DisplayedCardsContainer";
import ExpansionListContainer from "./components/ExpansionsPage/ExpansionListContainer";
import ForgotContainer from "./components/SignInPage/ForgotPage/ForgotContainer";
import LifeCounterComponent from "./components/LifeCounterComponent";
import SignInComponent from "./components/SignInPage/SignInComponent";
import MainComponent from "./components/MainPage/MainComponent";
import NavBarComponent from "./components/MainPage/NavBarComponent";
import RegisterComponent from "./components/SignInPage/RegisterComponent";

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
              render={(props) => <ForgotContainer />}
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
