import React, { Component } from "react";
//import Home from "./Home";

export class CreateJoke extends Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      punchline: "",
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleSaveJoke();
  };

  handleSaveJoke = () => {
    debugger;
    const configureData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _id: Math.floor(Math.random() * 1000000000),
        punchline: this.state.punchline,
        setup: this.state.joke,
      }),
    };

    fetch(`http://localhost:3000/jokes`, configureData).then(() => {
      this.setState({
        joke: "",
        punchline: "",
      });
      this.props.fetchJsonServer();
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="Joke">Enter Setup</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Joke Setup"
            name="joke"
            onChange={this.handleChange}
          ></input>
        </div>
        <div class="form-group">
          <label for="punchline">Punchline</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Punchline"
            name="punchline"
            onChange={this.handleChange}
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Save Joke
        </button>
      </form>
    );
  }
}
export default CreateJoke;
