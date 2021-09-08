import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./containers/Home";
import SavedJokes from "./containers/SavedJokes";
import CreateJoke from "./containers/CreateJoke";

export class App extends Component {
  state = {
    savedJokes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/jokes")
      .then((response) => response.json())
      .then((savedJokes) => this.setState({ savedJokes }));
  }

  handleSaveJoke = (joke) => {
    if (this.state.savedJokes.find((saved) => saved["_id"] == joke["_id"]))
      return;

    const configureData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(joke),
    };

    fetch(`http://localhost:3000/jokes`, configureData);

    this.setState((prevState) => {
      return {
        savedJokes: [...prevState.savedJokes, joke],
      };
    });
  };

  render() {
    return (
      <Router>
        <>
          <Nav />

          <div className="container">
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <Home
                  {...routerProps}
                  handleSaveJoke={this.handleSaveJoke}
                  savedJokes={this.state.savedJokes}
                />
              )}
            />
            <Route exact path="/saved" component={SavedJokes} />
            <Route exact path="/create" component={CreateJoke} />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
