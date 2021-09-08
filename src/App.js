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

  fetchJsonServer = () => {
    fetch("http://localhost:3000/jokes")
      .then((response) => response.json())
      .then((savedJokes) => this.setState({ savedJokes }));
  };

  componentDidMount() {
    this.fetchJsonServer();
  }

  handleSaveJoke = async (joke) => {
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

    await fetch(`http://localhost:3000/jokes`, configureData);
    await this.fetchJsonServer();
  };

  handleRemoveJoke = (joke) => {
    fetch(`http://localhost:3000/jokes/${joke.id}`, {
      method: "DELETE",
    });

    const filteredJokes = this.state.savedJokes.filter(
      (saved) => saved["_id"] !== joke["_id"]
    );

    this.setState({
      savedJokes: filteredJokes,
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
                  handleJoke={this.handleSaveJoke}
                  savedJokes={this.state.savedJokes}
                />
              )}
            />
            <Route
              exact
              path="/saved"
              render={(routerProps) => (
                <SavedJokes
                  {...routerProps}
                  savedJokes={this.state.savedJokes}
                  handleJoke={this.handleRemoveJoke}
                />
              )}
            />
            <Route
              exact
              path="/create"
              render={(routerProps) => (
                <CreateJoke
                  {...routerProps}
                  fetchJsonServer={this.fetchJsonServer}
                />
              )}
            />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
