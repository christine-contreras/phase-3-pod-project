import React, { Component } from "react";
//import Home from "./Home";

export class CreateJoke extends Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      punchLine: "",
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit(e) {
    e.preventDefault();
    console.log("Clicked");
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="Joke">Enter Joke</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Joke"
            name="joke"
            onChange={this.handleChange}
          ></input>
        </div>
        <div class="form-group">
          <label for="punchline">Punchline</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Punchline"
            onChange={this.handleChange}
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
export default CreateJoke;
