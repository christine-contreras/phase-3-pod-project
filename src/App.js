import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./containers/Home";
import SavedJokes from "./containers/SavedJokes";
import CreateJoke from "./containers/CreateJoke";

export class App extends Component {
  state = {
    savedJokes: null,
  };

  handleSaveJoke = (joke) => {
    fetch(``);
  };

  render() {
    return (
      <Router>
        <>
          <Nav />

          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={SavedJokes} />
            <Route exact path="/create" component={CreateJoke} />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
