import React, { Component } from "react";
import Card from "../components/Card";
import { data } from "../data";
const apiKey = process.env.REACT_APP_API;

export class Home extends Component {
  state = {
    jokes: [],
  };

  componentDidMount() {
    fetch("https://dad-jokes.p.rapidapi.com/random/joke?count=4", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          jokes: data.body,
        });
      });

    // this.setState({
    //   jokes: data,
    // });
  }

  render() {
    return (
      <div className="container">
        <h1>Random Dad Jokes</h1>

        <div className="row">
          {this.state.jokes.map((joke) => {
            return (
              <Card
                key={joke.date}
                location={this.props.location}
                joke={joke}
                handleJoke={this.props.handleJoke}
                jokeIsSaved={this.props.savedJokes.find(
                  (savedJoke) => savedJoke["_id"] === joke["_id"]
                )}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
